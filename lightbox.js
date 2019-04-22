                  
      $(function() {

        //Adding a data-index attribute to each image,
        //so that gallery opens at correct image
        $( ".container-img" ).each(function(index){
          var images = $(this).children()
          images.each(function(index){
            $(this).attr("data-index", index)
          })
        })

        // ScalableLightbox
        $.ScalableLightbox({
          // show what's happening in
          // the debugger console
          debug: true,

          // define the path for all
          // resources (images):
          baseImgPath: 'assets/img/lightbox/',

          // define data structure inline
          data: [
            // canyon house (deck id 1)
            {
              "id": 53,
              "items": [{
                  "img": "53/1-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/2-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/3-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/4-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/5-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/6-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/7-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/8-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "53/9-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                }
                // additional item objects ...
              ]
            },
          ],
          // set index layout to masonry
          index: {
            layout: "masonry"
          }
        });



        // define click behavior by employing
        // the open method
        $(".project-item").click(function(e) {

          // get the deck id of the current item
          var id = parseInt($(this).attr("href").substring(1), 10);

          // get the index of the image you are clicking on
          var imageIndex = parseInt($(this).attr("data-index"));
          if (!imageIndex) {
            imageIndex = 0
          }

          // prevent the default anchor behavior
          e.preventDefault();

          // open the lightbox module
          $.ScalableLightbox("open", {
            module: "lightbox",
            deck: id,
            index: imageIndex
          });

        });

      });
