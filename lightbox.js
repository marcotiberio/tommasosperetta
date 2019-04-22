
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
            // #63
            {
              "id": 63,
              "items": [{
                  "img": "63/1-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/2-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/3-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/4-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/5-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/6-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/7-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/8-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "63/9-America-Society-Leonilson.jpg",
                  "width": 959,
                  "height": 700,
                  "caption": "Americas Society"
                }
                // additional item objects ...
              ]
            },
            // #62
            {
              "id": 62,
              "items": [{
                  "img": "62/1-Encore-Art_Geneve.jpeg",
                  "width": 986,
                  "height": 700,
                  "caption": "Art Genève"
                },
                {
                  "img": "62/2-Encore-Art_Geneve.jpg",
                  "width": 1050,
                  "height": 700,
                  "caption": "Art Genève"
                },
                {
                  "img": "62/3-Encore-Art_Geneve.jpg",
                  "width": 1050,
                  "height": 700,
                  "caption": "Art Genève"
                },
                {
                  "img": "62/4-Encore-Art_Geneve.jpg",
                  "width": 1120,
                  "height": 700,
                  "caption": "Art Genève"
                },
                {
                  "img": "62/5-Encore-Art_Geneve.jpg",
                  "width": 1120,
                  "height": 700,
                  "caption": "Art Genève"
                },
                {
                  "img": "62/6-Encore-Art_Geneve.jpg",
                  "width": 986,
                  "height": 700,
                  "caption": "Art Genève"
                }
                // additional item objects ...
              ]
            },
            // #61
            {
              "id": 61,
              "items": [{
                  "img": "61/1-Athens-Dialogues-DESTE.jpg",
                  "width": 467,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/2-Athens-Dialogues-DESTE.jpg",
                  "width": 921,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/3-Athens-Dialogues-DESTE.jpg",
                  "width": 924,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/4-Athens-Dialogues-DESTE.jpg",
                  "width": 837,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/5-Athens-Dialogues-DESTE.jpg",
                  "width": 839,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/6-Athens-Dialogues-DESTE.jpg",
                  "width": 866,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/7-Athens-Dialogues-DESTE.jpg",
                  "width": 924,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/8-Athens-Dialogues-DESTE.jpg",
                  "width": 893,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/9-Athens-Dialogues-DESTE.jpg",
                  "width": 893,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
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
