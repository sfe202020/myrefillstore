window.addEventListener('hashchange', function () {
  var pageId = window.location.hash.split('#')[1]
  var mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  switch (pageId) {
    case 'home':
      // Load the content for the home page
      var homeContent = `
    <div class="container">
      <!-- Image section -->
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-3">
              <img src="./images/image1.jpg" alt="Image 1" class="img-fluid enlarged" />
            </div>
            <div class="col-md-3">
              <img src="./images/image2.jpg" alt="Image 2" class="img-fluid enlarged" />
            </div>
            <div class="col-md-3">
              <img src="./images/image3.jpg" alt="Image 3" class="img-fluid enlarged" />
            </div>
            <div class="col-md-3">
              <img src="./images/image4.jpg" alt="Image 4" class="img-fluid enlarged" />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p>환영합니다! 저희는 친환경 리필 스토어 검색 서비스를 제공하는 웹사이트입니다.</p>
          <p>가까운곳에 친환경 상점이나 리필 스토어가 있는지 찾아 보세요! </p> 
          <p>함께 지속 가능한 미래를 만들어 나가는 여정에 동참해 주셔서 감사합니다.</p>
        </div>
      </div>
    </div>
    `
      // Load the content for the home page
      mainContent.innerHTML = homeContent

      break

    case 'portfolio':
      // Sample data for the portfolio
      var portfolioData = [
        {
          src: './images/image1.jpg',
          title: '<strong> Refillery LA</strong>',
          description:
            '<p><strong>Location: Los Angeles, California</strong> </p> Of all the refill stores Los Angeles boasts, Refillery LA takes “BYOC” (Bring Your Own Container) to the next level with their quest to reduce LA plastic pollution. They have both a brick-and-mortar “refill bar” chock-full of household products and items, in addition to a mobile zero waste refill van for house calls.',
        },
        {
          src: './images/image2.jpg',
          title: '<strong> Sustain LA </strong>',
          description:
            '<p><strong>Location: Los Angeles, California</strong> </p>Sustain LA believes in working together to disrupt the concept of convenience. This female-run plastic free hub was one of the first, making them leaders in the sustainable community and one of the best zero waste stores in Los Angeles. They drive local LA initiatives like the LA Food Policy Council and support programs like providing working opportunities for individuals formerly gang-involved or incarcerated.',
        },
        {
          src: './images/image3.jpg',
          title: '<strong>R[Eco]Ntained </strong>',
          description:
            '<p><strong>Location: Los Angeles, California</strong> </p> R[eco]ntained is one of the only zero waste stores in the Santa Monica / Venice Beach area, making it a hot stop for LA’s concrete jungle eco-warriors. This waste-free store in Los Angeles is female-operated by Tonia, whose fan base celebrates this hidden gem for its service and dedication. Everything here is vegan, aside from the use of ethically-sourced beeswax for some products. ',
        },
        {
          src: './images/image4.jpg',
          title: '<strong> Refillery LA</strong>',
          description:
            '<p><strong>Location: Los Angeles, California</strong> </p> Of all the refill stores Los Angeles boasts, Refillery LA takes “BYOC” (Bring Your Own Container) to the next level with their quest to reduce LA plastic pollution. They have both a brick-and-mortar “refill bar” chock-full of household products and items, in addition to a mobile zero waste refill van for house calls.',
        },
        {
          src: './images/image5.jpg',
          title: '<strong> Sustain LA </strong>',
          description:
            '<p><strong>Location: Los Angeles, California</strong> </p>Sustain LA believes in working together to disrupt the concept of convenience. This female-run plastic free hub was one of the first, making them leaders in the sustainable community and one of the best zero waste stores in Los Angeles. They drive local LA initiatives like the LA Food Policy Council and support programs like providing working opportunities for individuals formerly gang-involved or incarcerated.',
        },
        {
          src: './images/image6.jpg',
          title: '<strong>R[Eco]Ntained </strong>',
          description:
            '<p><strong>Location: Los Angeles, California</strong> </p> R[eco]ntained is one of the only zero waste stores in the Santa Monica / Venice Beach area, making it a hot stop for LA’s concrete jungle eco-warriors. This waste-free store in Los Angeles is female-operated by Tonia, whose fan base celebrates this hidden gem for its service and dedication. Everything here is vegan, aside from the use of ethically-sourced beeswax for some products. ',
        },
        // ... add more services as needed
      ]

      var portfolioHTML = '<h1>Store Reviews</h1><div class="row">'
      for (var i = 0; i < portfolioData.length; i++) {
        portfolioHTML += `<div class="col-sm-4">
              <div class="card">
                <img src="${portfolioData[i].src}" class="card-img-top" alt="${portfolioData[i].title}">
                <div class="card-body">
                  <h5 class="card-title">${portfolioData[i].title}</h5>
                  <p class="card-text">${portfolioData[i].description}</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>`
      }
      portfolioHTML += '</div>'

      mainContent.innerHTML = portfolioHTML
      break
    case 'gallary':
      // Load the content for the gallary page
      mainContent.innerHTML = `
        <h1>Gallary</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://via.placeholder.com/150" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://via.placeholder.com/150" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://via.placeholder.com/150" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        `
      break

    case 'blog':
      var blogContent = `
          <h1> Zero Waste Tips </h1>
          <div class="container">
          <!-- Youtube section -->
          <div class="row">
            <!-- Card 1 -->
            <div class="col-sm-4">
              <div class="card">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/BU5jxb13_aE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">친환경 꿀팁 1편</h5>
                  <p class="card-text">돈한푼 안들이고 하는 정리, 수납 꿀팁 10가지 </p>
                  <a
                    href="https://www.youtube.com/watch?v=BU5jxb13_aE"
                    target="_blank"
                    class="btn btn-primary"
                    >Go to YouTube</a
                  >
                </div>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="col-sm-4">
              <div class="card">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/KTHmMNeqra4"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">친환경 꿀팁 2편</h5>
                  <p class="card-text">깨끗한 화장실을 위한 하루 15분 청소루틴</p>
                  <a
                    href="https://www.youtube.com/watch?v=KTHmMNeqra4"
                    target="_blank"
                    class="btn btn-primary"
                    >Go to YouTube</a
                  >
                </div>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="col-sm-4">
              <div class="card">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/lNRbMmdIh7k"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <h5 class="card-title">친환경 꿀팁 3편</h5>
                  <p class="card-text">재활용 어디까지해봤니? 친환경 살림 실천하기</p>
                  <a
                    href="https://www.youtube.com/watch?v=lNRbMmdIh7k"
                    target="_blank"
                    class="btn btn-primary"
                    >Go to YouTube</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      mainContent.innerHTML = blogContent
      break

    case 'stores':
      var storesContent = `
      <h1>Refill Store Search</h1>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form action="" id="store-search-form" class="mt-5">
                  <div class="input-group">
                    <input
                      type="text"
                      id="store-search-input"
                      class="form-control"
                      placeholder="Enter your zipcode"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="store-search-results"></div>
          </div>
        `
      mainContent.innerHTML = storesContent

      var storeSearchForm = document.getElementById('store-search-form')
      var storeSearchInput = document.getElementById('store-search-input')
      var storeSearchResults = document.getElementById('store-search-results')

      storeSearchForm.addEventListener('submit', function (event) {
        event.preventDefault()
        searchStores(storeSearchInput.value)
      })

      function searchStores(query) {
        // Clear the search results
        storeSearchResults.innerHTML = ''

        // Perform the search (dummy data for illustration)
        var results = [
          {
            name: 'Sustain LA',
            description: 'Address: 5214 Monte Vista St., Los Angeles, CA 90042',
          },
          {
            name: 're_grocery',
            description: 'Address: 12928 Venice Blvd., Los Angeles, CA 90066',
          },
          // ... more results ...
        ]

        // Show the search results
        for (var i = 0; i < results.length; i++) {
          var resultHTML = `
              <div class="card mt-3">
                <div class="card-body">
                  <h5 class="card-title">${results[i].name}</h5>
                  <p class="card-text">${results[i].description}</p>
                </div>
              </div>
            `
          storeSearchResults.innerHTML += resultHTML
        }
      }

      break
    case 'contact':
      var contactContent = `
            <h1>Contact</h1>
            <p>Connect with us on social media:</p>
            <a href="http://www.rekurator.com" target="_blank">
                <i class="fas fa-globe fa-2x"></i> Our Website
            </a><br>
            <a href="https://www.instagram.com/rekurator/" target="_blank">
                <i class="fab fa-instagram fa-2x"></i> Company Instagram
            </a><br>
            <a href="https://www.facebook.com/REKURATOR" target="_blank">
                <i class="fab fa-facebook-f fa-2x"></i> Company Facebook
            </a><br>
            <a href="https://www.pinterest.com/rekurator/_shop/" target="_blank">
                <i class="fab fa-pinterest fa-2x"></i> Company Pinterest
            </a><br>
            <a href="https://www.instagram.com/ordinary.earthians/" target="_blank">
                <i class="fab fa-instagram fa-2x"></i> Personal Instagram
            </a><br>
            <a href="mailto:sfe.operation@gmail.com" target="_blank">
                <i class="fas fa-envelope fa-2x"></i> Personal Email
            </a>
        `
      mainContent.innerHTML = contactContent
      break

    // Repeat for other pages...
    default:
      // If no match is found, revert to the home page
      mainContent.innerHTML = '<h1>Home</h1>'
      break
  }
})
