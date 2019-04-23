
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
                  "width": 461,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/3-Athens-Dialogues-DESTE.jpg",
                  "width": 460,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/4-Athens-Dialogues-DESTE.jpg",
                  "width": 419,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/5-Athens-Dialogues-DESTE.jpg",
                  "width": 460,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/6-Athens-Dialogues-DESTE.jpg",
                  "width": 460,
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
                  "width": 467,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                },
                {
                  "img": "61/9-Athens-Dialogues-DESTE.jpg",
                  "width": 460,
                  "height": 700,
                  "caption": "DESTE Foundation for Contemporary Art"
                }
                // additional item objects ...
              ]
            },
            // #60
            {
              "id": 60,
              "items": [{
                  "img": "60/1-Jeff-Koons-DESTE.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/2-Jeff-Koons-DESTE.jpg",
                  "width": 492,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/3-Jeff-Koons-DESTE.jpg",
                  "width": 462,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/4-Jeff-Koons-DESTE.jpg",
                  "width": 1046,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/5-Jeff-Koons-DESTE.jpg",
                  "width": 543,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/6-Jeff-Koons-DESTE.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/7-Jeff-Koons-DESTE.jpg",
                  "width": 1106,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/8-Jeff-Koons-DESTE.jpg",
                  "width": 542,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "60/9-Jeff-Koons-DESTE.jpg",
                  "width": 545,
                  "height": 700,
                  "caption": "Americas Society"
                }
                // additional item objects ...
              ]
            },
            // #59
            {
              "id": 59,
              "items": [{
                  "img": "59/1-DESTE-Kiki-Smith-KM.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "59/2-Kiki-Smith-DESTE-KM.jpg",
                  "width": 1045,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "59/3-Kiki-Smith-DESTE-KM.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "59/4-Kiki-Smith-DESTE-KM.jpg",
                  "width": 553,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "59/5-Kiki-Smith-DESTE-KM.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "59/6-Kiki-Smith-DESTE-KM.jpg",
                  "width": 1045,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "59/7-Kiki-Smith-DESTE-KM.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                }
                // additional item objects ...
              ]
            },
            // #58
            {
              "id": 58,
              "items": [{
                  "img": "58/1-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/2-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 477,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/3-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 970,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/4-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 1156,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/5-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 525,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/6-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/7-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 522,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/8-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 523,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "58/9-Andra-Ursuta-DESTE-AU.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                }
                // additional item objects ...
              ]
            },
            // #57
            {
              "id": 57,
              "items": [{
                  "img": "57/1-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/2-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/3-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 467,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/4-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 469,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/5-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 470,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/6-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 730,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/7-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 477,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "57/8-DESTE-Kerstin-Bratsch-KB.jpg",
                  "width": 524,
                  "height": 700,
                  "caption": "Americas Society"
                }
                // additional item objects ...
              ]
            },
            // #48
            {
              "id": 48,
              "items": [{
                  "img": "48/1-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/2-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/3-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/4-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/5-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/6-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/7-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/8-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
                  "height": 700,
                  "caption": "Americas Society"
                },
                {
                  "img": "48/9-Athens-Dialogues-DESTE-Benaki.jpg",
                  "width": 1052,
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
