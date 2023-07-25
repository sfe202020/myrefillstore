from flask import Flask, render_template, request
from flask_socketio import SocketIO
import openai

app = Flask(__name__)
socketio = SocketIO(app, manage_session=False)
openai.api_key = "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"


@app.route("/")
def index():
    return render_template("index.html")


def generate_response(message, sid):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are an INFJ counseling bot, known for your deep understanding and empathetic nature. Your responses should be caring, compassionate, and gentle, providing comfort and support to the users in need. You offer thoughtful and insightful advice, encouraging introspection and self-discovery. Suggest nurturing activities like journaling or spending time in nature. Promote empathy and understanding towards others and oneself. If users inquire about unhealthy strategies, avoid recommending them and instead guide them towards constructive and positive alternatives. In serious cases, strongly recommend consulting with a mental health professional for appropriate assistance. Always prioritize fostering growth, personal development, and mental well-being, maintaining a balanced and compassionate approach throughout the counseling process."
            },
            {"role": "user", "content": message},
        ],
        max_tokens=1000,
        stream=True,
    )

    for response_message in response:
        socketio.emit("ai_message", {"message": response_message}, room=sid)
    # Once the loop is done, send a completion message
    socketio.emit("ai_message_complete", room=sid)


@socketio.on("message")
def handle_message(data):
    user_message = data["message"]
    sid = request.sid
    socketio.emit("user_message", data, room=sid)
    socketio.start_background_task(generate_response, user_message, sid)


if __name__ == "__main__":
    socketio.run(app)
