<template>
   <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
         <div class="container">
            <a class="navbar-brand" href="/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div cl="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                     <a class="nav-link" href="#" style="font-family: calibri; font-weight: bold">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#" style="font-family: calibri; font-weight: bold">About Us</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <header>
         <div class="container">
            <div class="banner-text">
               <div class="text-area">
                  <span>p</span>
                  <span>o</span>
                  <span>k</span>
                  <span>e</span>
                  <span>m</span>
                  <span>o</span>
                  <span>n</span>
               </div>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, repellat odio. Deserunt dolor magni nihil odio eligendi veritatis suscipit accusamus, rerum quos nemo a, maiores reprehenderit totam maxime</p>
               <router-link to="/detailscreen">
                  <p class="banner-btn">
                     <a href="#" class="active">Visit Pokemon</a>
                  </p>
               </router-link>
            </div>
         </div>
      </header>
      <body style="position: top: 10px">
         <div class="container">
            <div id="carouselMultiItemExample"
               class="carousel slide carousel-dark text-center"
               data-mdb-ride="carousel">
               <div class="d-flex justify-content-center mb-4">
                  <button class="carousel-control-prev position-relative"
                     type="button"
                     data-mdb-target="#carouselMultiItemExample"
                     data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                     class="carousel-control-next position-relative"
                     type="button"
                     data-mdb-target="#carouselMultiItemExample"
                     data-mdb-slide="next"
                     >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                  </button>
                  <div class="carousel-inner py-4" style="width: 18rem;" v-for="(pokemon, index) in pokemons" :key="'poke'+index">
                     <div class="carousel-item active">
                        <div class="container">
                           <div class="row">
                              <div class="col-lg-4">
                                 <div class="card">
                                    <img
                                       src="https://mdbootstrap.com/img/new/standard/nature/181.jpg"
                                       class="card-img-top"
                                       alt="..."
                                       />
                                    <div class="card-body">
                                       <h5 class="card-title">Card title</h5>
                                       <p class="card-text">
                                          Some quick example text to build on the card title and make up the bulk
                                          of the card's content.
                                       </p>
                                       <a href="#!" class="btn btn-primary">Button</a>
                                    </div>
                                 </div>
                              </div>
                                <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </body>
   </div>
</template>
<script>
   export default {
         data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false
    };
  },

  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    }
  }
       
   };
</script>