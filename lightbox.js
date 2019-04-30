$(function() {

  //Adding a data-index attribute to each image,
  //so that gallery opens at correct image
  $(".container-img").each(function(index) {
    var images = $(this).children()
    images.each(function(index) {
      $(this).attr("data-index", index)
    })
  })

  // ScalableLightbox
  $.ScalableLightbox({
    // show what's happening in
    // the debugger console
    debug: true,

    // prevent page from scrolling up
    // after closing lightbox
    hash: false,

    // define the path for all
    // resources (images):
    baseImgPath: 'assets/img/lightbox/',

    // define data structure inline
    data: [
      // #63
      {
        "id": 63,
        "items": [{
            "img": "63/3-Carlo-Zinelli.jpg",
            "width": 1002,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/4-Carlo-Zinelli.jpg",
            "width": 490,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/5-Carlo-Zinelli.jpg",
            "width": 498,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/6-Carlo-Zinelli.jpg",
            "width": 546,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/8-Carlo-Zinelli.jpg",
            "width": 508,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/9-Carlo-Zinelli.jpg",
            "width": 504,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/10-Carlo-Zinelli.jpg",
            "width": 501,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          },
          {
            "img": "63/11-Carlo-Zinelli.jpg",
            "width": 988,
            "height": 700,
            "caption": "Fondazione Carlo Zinelli | Ph © Stefano Saccomani"
          }
          // additional item objects ...
        ]
      },
      // #62
      {
        "id": 62,
        "items": [{
            "img": "62/1-Encore-Art_Geneve.jpg",
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
            "width": 416,
            "height": 700,
            "caption": "Art Genève"
          },
          {
            "img": "62/5-Encore-Art_Geneve.jpg",
            "width": 1120,
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
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/2-Athens-Dialogues-DESTE.jpg",
            "width": 461,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/3-Athens-Dialogues-DESTE.jpg",
            "width": 460,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/4-Athens-Dialogues-DESTE.jpg",
            "width": 419,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/5-Athens-Dialogues-DESTE.jpg",
            "width": 460,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/6-Athens-Dialogues-DESTE.jpg",
            "width": 460,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/7-Athens-Dialogues-DESTE.jpg",
            "width": 467,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
          },
          {
            "img": "61/8-Athens-Dialogues-DESTE.jpg",
            "width": 467,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Ari Marcopoulos"
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
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/2-Jeff-Koons-DESTE.jpg",
            "width": 492,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/3-Jeff-Koons-DESTE.jpg",
            "width": 462,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/4-Jeff-Koons-DESTE.jpg",
            "width": 1046,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/5-Jeff-Koons-DESTE.jpg",
            "width": 543,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/6-Jeff-Koons-DESTE.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/7-Jeff-Koons-DESTE.jpg",
            "width": 1106,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/8-Jeff-Koons-DESTE.jpg",
            "width": 542,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          },
          {
            "img": "60/9-Jeff-Koons-DESTE.jpg",
            "width": 545,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Jeff Koons"
          }
          // additional item objects ...
        ]
      },
      // #59
      {
        "id": 59,
        "items": [{
            "img": "59/1-DESTE-Kiki-Smith.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Ph © Ellen Page"
          },
          {
            "img": "59/2-Kiki-Smith-DESTE-KM.jpg",
            "width": 1045,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou"
          },
          {
            "img": "59/3-Kiki-Smith-DESTE-KM.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou"
          },
          {
            "img": "59/4-Kiki-Smith-DESTE-KM.jpg",
            "width": 553,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Courtesy Anthony d’Offay Gallery, London"
          },
          {
            "img": "59/5-Kiki-Smith-DESTE-KM.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Ph © Tom Powel"
          },
          {
            "img": "59/6-Kiki-Smith-DESTE-KM.jpg",
            "width": 1045,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Courtesy Anthony d’Offay Gallery, London"
          },
          {
            "img": "59/7-Kiki-Smith-DESTE-KM.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kiki Smith |<br> Ph © Stefan Altenburger"
          }
          // additional item objects ...
        ]
      },
      // #58
      {
        "id": 58,
        "items": [{
            "img": "58/1-DESTE-Andra-Ursuta.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Fanis Vlastaras & Rebecca Constantopoulou"
          },
          {
            "img": "58/2-Andra-Ursuta-DESTE-AU.jpg",
            "width": 477,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Jason Mandella"
          },
          {
            "img": "58/3-Andra-Ursuta-DESTE-AU.jpg",
            "width": 970,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Annik Wetter"
          },
          {
            "img": "58/4-Andra-Ursuta-DESTE-AU.jpg",
            "width": 1156,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Uli Holz"
          },
          {
            "img": "58/5-Andra-Ursuta-DESTE-AU.jpg",
            "width": 525,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Todd White"
          },
          {
            "img": "58/6-Andra-Ursuta-DESTE-AU.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Todd White"
          },
          {
            "img": "58/7-Andra-Ursuta-DESTE-AU.jpg",
            "width": 522,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Todd White"
          },
          {
            "img": "58/8-Andra-Ursuta-DESTE-AU.jpg",
            "width": 523,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Philipp Hänger"
          },
          {
            "img": "58/9-Andra-Ursuta-DESTE-AU.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Andra Ursuţa |<br>  Ph © Alessandro Zambianchi"
          }
          // additional item objects ...
        ]
      },
      // #57
      {
        "id": 57,
        "items": [{
            "img": "57/1-DESTE-Kerstin-Bratsch.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/2-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/3-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 467,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/4-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 469,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/5-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 470,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/6-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 730,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/7-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 477,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT | Ph © Simon Vogel"
          },
          {
            "img": "57/8-DESTE-Kerstin-Bratsch-KB.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kerstin Brätsch<br> for DAS INSTITUT |  Ph © DAS INSTITUT"
          }
          // additional item objects ...
        ]
      },
      // #56
      {
        "id": 56,
        "items": [{
            "img": "56/7-SI-Pavilion.jpg",
            "width": 493,
            "height": 700,
            "caption": "Swiss Institute | © Shawn Maximo & Naho Kubota"
          },
          {
            "img": "56/2-SI-Pavilion.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Shawn Maximo & Naho Kubota"
          },
          {
            "img": "56/3-SI-Pavilion.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Shawn Maximo & Naho Kubota"
          },
          {
            "img": "56/4-SI-Pavilion.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Shawn Maximo & Naho Kubota"
          },
          {
            "img": "56/5-SI-Pavilion.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Shawn Maximo & Naho Kubota"
          },
          {
            "img": "56/6-SI-Pavilion.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Shawn Maximo & Naho Kubota"
          }
          // additional item objects ...
        ]
      },
      // #55
      {
        "id": 55,
        "items": [{
            "img": "55/1-Gagosian-Penone.jpg",
            "width": 722,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/2-Gagosian-Penone.jpg",
            "width": 544,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/3-Gagosian-Penone.jpg",
            "width": 549,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/5-Gagosian-Penone.jpg",
            "width": 550,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/6-Gagosian-Penone.jpg",
            "width": 1076,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/8-Gagosian-Penone.jpg",
            "width": 496,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/9-Gagosian-Penone.jpg",
            "width": 546,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/11-Gagosian-Penone.jpg",
            "width": 546,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          },
          {
            "img": "55/12-Gagosian-Penone.jpg",
            "width": 548,
            "height": 700,
            "caption": "Gagosian and Rizzoli International | © Giuseppe Penone"
          }
          // additional item objects ...
        ]
      },
      // #54
      {
        "id": 54,
        "items": [{
            "img": "54/1-Piero-Manzoni-Gagosian.jpg",
            "width": 476,
            "height": 700,
            "caption": "Gagosian and Rizzoli International"
          }
          // additional item objects ...
        ]
      },
      // #53
      {
        "id": 53,
        "items": [{
            "img": "53/1-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/2-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/3-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/4-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/5-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/6-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/7-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/8-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/9-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          },
          {
            "img": "53/10-America-Society-Leonilson.jpg",
            "width": 959,
            "height": 700,
            "caption": "Americas Society | © Projecto Leonilson"
          }
          // additional item objects ...
        ]
      },
      // #52
      {
        "id": 52,
        "items": [{
            "img": "52/1-Americas-Society-Erick-Meyenberg.jpg",
            "width": 983,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/2-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 520,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/3-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 520,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/4-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1049,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/5-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1040,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/6-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1043,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/7-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1042,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/8-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1042,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/9-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1042,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          },
          {
            "img": "52/10-Americas-Society-Erick-Meyenberg-AM.jpg",
            "width": 1042,
            "height": 700,
            "caption": "Americas Society and Yerba Buena Center for the Arts | Courtesy The Artist"
          }
          // additional item objects ...
        ]
      },
      // #51
      {
        "id": 51,
        "items": [{
            "img": "51/1-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 935,
            "height": 700,
            "caption": "Isaac Julien | Courtesy The Artist"
          },
          {
            "img": "51/3-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 885,
            "height": 700,
            "caption": "Isaac Julien | Courtesy The Artist"
          },
          {
            "img": "51/4-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 976,
            "height": 700,
            "caption": "Ellen Spiro | Courtesy Video Data Bank"
          },
          {
            "img": "51/5-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 979,
            "height": 700,
            "caption": "Ellen Spiro | Courtesy Video Data Bank"
          },
          {
            "img": "51/6-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 934,
            "height": 700,
            "caption": "Tom Kalin | Courtesy Video Data Bank"
          },
          {
            "img": "51/7-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 936,
            "height": 700,
            "caption": "Barbara Hammer | Courtesy Video Data Bank"
          },
          {
            "img": "51/8-AIDS-Video_Interruption-British-Museum.jpg",
            "width": 935,
            "height": 700,
            "caption": "Gran Fury | Courtesy Video Data Bank"
          }
          // additional item objects ...
        ]
      },
      // #50
      {
        "id": 50,
        "items": [{
            "img": "50/1-BJP-bruno.jpg",
            "width": 427,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/3-BJP-bruno.jpg",
            "width": 1067,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/4-BJP-bruno.jpg",
            "width": 1102,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/5-BJP-bruno.jpg",
            "width": 465,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/6-BJP-bruno.jpg",
            "width": 1061,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/9-BJP-bruno.jpg",
            "width": 1056,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/10-BJP-bruno.jpg",
            "width": 1043,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/12-BJP-bruno.jpg",
            "width": 459,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          },
          {
            "img": "50/13-BJP-bruno.jpg",
            "width": 462,
            "height": 700,
            "caption": "Ph © Bart Julius Peters"
          }
          // additional item objects ...
        ]
      },
      // #49
      {
        "id": 49,
        "items": [{
            "img": "49/1-bruno-BJP.jpg",
            "width": 933,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/3-bruno-BJP.jpg",
            "width": 1031,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/5-bruno-BJP.jpg",
            "width": 1031,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/6-bruno-BJP.jpg",
            "width": 1031,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/7-bruno-BJP.jpg",
            "width": 1031,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/8-bruno-BJP.jpg",
            "width": 1009,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/9-bruno-BJP.jpg",
            "width": 1009,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
          },
          {
            "img": "49/10-bruno-BJP.jpg",
            "width": 1031,
            "height": 700,
            "caption": "bruno | Ph © Bart Julius Peters"
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
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/2-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/3-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/4-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/5-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/6-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/7-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/8-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          },
          {
            "img": "48/9-Athens-Dialogues-DESTE-Benaki.jpg",
            "width": 1052,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Freddie F."
          }
          // additional item objects ...
        ]
      },
      // #47
      {
        "id": 47,
        "items": [{
            "img": "47/1-DESTE-Liquid-Antiquity.jpg",
            "width": 507,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art"
          },
          {
            "img": "47/4-DESTE-Liquid-Antiquity-CR.jpg",
            "width": 574,
            "height": 700,
            "caption": "Charles Ray | Courtesy DESTE Foundation for Contemporary Art and the artist"
          },
          {
            "img": "47/5-DESTE-Liquid-Antiquity-DJ.jpg",
            "width": 500,
            "height": 700,
            "caption": "Chris Ofili | Courtesy DESTE Foundation for Contemporary Art and the artist"
          },
          {
            "img": "47/6-DESTE-Liquid-Antiquity-MC.jpg",
            "width": 500,
            "height": 700,
            "caption": "Maurizio Cattelan | Courtesy DESTE Foundation for Contemporary Art and the artist"
          },
          {
            "img": "47/7-DESTE-Liquid-Antiquity-UF.jpg",
            "width": 500,
            "height": 700,
            "caption": "Urs Fischer| Courtesy DESTE Foundation for Contemporary Art and the artist"
          },
          {
            "img": "47/8-DESTE-Liquid-Antiquity-CR.jpg",
            "width": 989,
            "height": 700,
            "caption": "Charles Ray | Courtesy DESTE Foundation for Contemporary Art and the artist"
          },
          {
            "img": "47/9-DESTE-Liquid-Antiquity-KA.jpg",
            "width": 989,
            "height": 700,
            "caption": "Charles Ray | Courtesy DESTE Foundation for Contemporary Art and the artist"
          },
          {
            "img": "47/11-DESTE-Liquid-Antiquity-JF.jpg",
            "width": 500,
            "height": 700,
            "caption": "Jeff Koons | Courtesy DESTE Foundation for Contemporary Art and the artist"
          }
          // additional item objects ...
        ]
      },
      // #46
      {
        "id": 46,
        "items": [{
            "img": "46/1-RDC-AAL-R.jpg",
            "width": 568,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/2-RDC-AAL-R.jpg",
            "width": 1089,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/3-RDC-AAL-R.jpg",
            "width": 1099,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/4-RDC-AAL-R.jpg",
            "width": 539,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/5-RDC-AAL-R.jpg",
            "width": 539,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/6-RDC-AAL-R.jpg",
            "width": 488,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/7-RDC-AAL-R.jpg",
            "width": 557,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          },
          {
            "img": "46/9-RDC-AAL-R.jpg",
            "width": 492,
            "height": 700,
            "caption": "Rizzoli International and RDC/AAL | Courtesy Rafael de Cárdenas"
          }
          // additional item objects ...
        ]
      },
      // #45
      {
        "id": 45,
        "items": [{
            "img": "45/1-BJP.jpg",
            "width": 933,
            "height": 700,
            "caption": "© San Serriffe"
          },
          {
            "img": "45/2-BJP.jpg",
            "width": 525,
            "height": 700,
            "caption": "© San Serriffe"
          },
          {
            "img": "45/3-BJP.jpg",
            "width": 933,
            "height": 700,
            "caption": "© San Serriffe"
          },
          {
            "img": "45/4-BJP.jpg",
            "width": 525,
            "height": 700,
            "caption": "© San Serriffe"
          },
          {
            "img": "45/5-BJP.jpg",
            "width": 537,
            "height": 700,
            "caption": "© San Serriffe"
          },
          {
            "img": "45/6-BJP.jpg",
            "width": 525,
            "height": 700,
            "caption": "© San Serriffe"
          },
          {
            "img": "45/7-BJP.jpg",
            "width": 525,
            "height": 700,
            "caption": "© San Serriffe"
          }
          // additional item objects ...
        ]
      },
      // #44
      {
        "id": 44,
        "items": [{
            "img": "44/1-DESTE-Kaari-Upson.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Alessandro Zambianchi"
          },
          {
            "img": "44/3-DESTE-Kaari-Upson-KA.jpg",
            "width": 526,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Fredrik Nilsen"
          },
          {
            "img": "44/4-DESTE-Kaari-Upson-KA.jpg",
            "width": 525,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Serge Hasenböhler"
          },
          {
            "img": "44/5-DESTE-Kaari-Upson-KA.jpg",
            "width": 1042,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Martin Elder"
          },
          {
            "img": "44/6-DESTE-Kaari-Upson-KA.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Martin Elder"
          },
          {
            "img": "44/7-DESTE-Kaari-Upson-KA.jpg",
            "width": 1149,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Brian Forrest"
          },
          {
            "img": "44/8-DESTE-Kaari-Upson-KA.jpg",
            "width": 524,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kaari Upson |<br> Ph © Dario Lasagni"
          },
          // additional item objects ...
        ]
      },
      // #43
      {
        "id": 43,
        "items": [{
            "img": "43/1-SI_FindeSiecle.jpg",
            "width": 493,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "43/2-SI_FindeSiecle.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "43/5-SI_FindeSiecle.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "43/6-SI_FindeSiecle.jpg",
            "width": 493,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "43/7-SI_FindeSiecle.jpg",
            "width": 490,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "43/8-SI_FindeSiecle.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Andreas Angelidakis"
          },
          {
            "img": "43/9-SI_FindeSiecle.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Andreas Angelidakis"
          },
          {
            "img": "43/11-SI_FindeSiecle.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | © Andreas Angelidakis"
          }
          // additional item objects ...
        ]
      },
      // #42
      {
        "id": 42,
        "items": [{
            "img": "42/1-SI_NieleToroni.jpg",
            "width": 493,
            "height": 700,
            "caption": "Swiss Institute | Ph © B. Burkhard"
          },
          {
            "img": "42/3-SI_NieleToroni-DP.jpg",
            "width": 493,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/4-SI_NieleToroni-DP.jpg",
            "width": 985,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/5-SI_NieleToroni-DP.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/6-SI_NieleToroni-DP.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/7-SI_NieleToroni-DP.jpg",
            "width": 985,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/8-SI_NieleToroni-DP.jpg",
            "width": 493,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/9-SI_NieleToroni-DP.jpg",
            "width": 986,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/10-SI_NieleToroni-DP.jpg",
            "width": 494,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          },
          {
            "img": "42/11-SI_NieleToroni-DP.jpg",
            "width": 985,
            "height": 700,
            "caption": "Swiss Institute | Ph © Daniel Pérez"
          }
          // additional item objects ...
        ]
      },
      // #41
      {
        "id": 41,
        "items": [{
            "img": "41/2-William-Ketridge-TL.jpg",
            "width": 1051,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/3-William-Ketridge-TL.jpg",
            "width": 979,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/4-William-Ketridge-TL.jpg",
            "width": 972,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/5-William-Ketridge-TL.jpg",
            "width": 1012,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/6-William-Ketridge-TL.jpg",
            "width": 987,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/7-William-Ketridge-TL.jpg",
            "width": 1029,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/8-William-Ketridge-TL.jpg",
            "width": 1019,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          },
          {
            "img": "41/9-William-Ketridge-TL.jpg",
            "width": 976,
            "height": 700,
            "caption": "William Kentridge | Courtesy Galleria Lia Rumma and Marian Goodman Gallery"
          }
          // additional item objects ...
        ]
      },
      // #40
      {
        "id": 40,
        "items": [{
            "img": "40/1-Rob-Pruitt.jpg",
            "width": 515,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/2-Rob-Pruitt.jpg",
            "width": 525,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/3-Rob-Pruitt.jpg",
            "width": 520,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/4-Rob-Pruitt.jpg",
            "width": 525,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/5-Rob-Pruitt.jpg",
            "width": 508,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/7-Rob-Pruitt.jpg",
            "width": 525,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/8-Rob-Pruitt.jpg",
            "width": 525,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/10-Rob-Pruitt.jpg",
            "width": 525,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          },
          {
            "img": "40/13-Rob-Pruitt.jpg",
            "width": 509,
            "height": 700,
            "caption": "bruno | Ph © Rob Pruitt"
          }
          // additional item objects ...
        ]
      },
      // #39
      {
        "id": 39,
        "items": [{
            "img": "39/1-Eddie-Peake-032C.jpg",
            "width": 1049,
            "height": 700,
            "caption": "Barbican Art Gallery | Ph © Justin Piperger"
          },
          {
            "img": "39/2-Eddie-Peake-032C.jpg",
            "width": 467,
            "height": 700,
            "caption": "Barbican Art Gallery | Ph © Justin Piperger"
          },
          {
            "img": "39/3-Eddie-Peake-032C.jpg",
            "width": 946,
            "height": 700,
            "caption": "Barbican Art Gallery | Ph © Justin Piperger"
          },
          {
            "img": "39/4-Eddie-Peake-032C.jpg",
            "width": 467,
            "height": 700,
            "caption": "Barbican Art Gallery | Ph © Justin Piperger"
          },
          {
            "img": "39/5-Eddie-Peake-032C.jpg",
            "width": 1051,
            "height": 700,
            "caption": "Barbican Art Gallery | Ph © Justin Piperger"
          },
          {
            "img": "39/6-Eddie-Peake-032C.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Barbican Art Gallery | Ph © Justin Piperger"
          }
          // additional item objects ...
        ]
      },
      // #38
      {
        "id": 38,
        "items": [{
            "img": "38/1-Flash-Art-Chantal-Ackerman.jpg",
            "width": 1050,
            "height": 700,
            "caption": "xxx"
          },
          {
            "img": "38/2-Flash-Art-Chantal-Ackerman.jpg",
            "width": 1049,
            "height": 700,
            "caption": "xxx"
          },
          {
            "img": "38/3-Flash-Art-Chantal-Ackerman.jpg",
            "width": 933,
            "height": 700,
            "caption": "xxx"
          },
          {
            "img": "38/4-Flash-Art-Chantal-Ackerman.jpg",
            "width": 934,
            "height": 700,
            "caption": "xxx"
          },
          {
            "img": "38/5-Flash-Art-Chantal-Ackerman.jpg",
            "width": 1053,
            "height": 700,
            "caption": "xxx"
          },
          {
            "img": "38/6-Flash-Art-Chantal-Ackerman.jpg",
            "width": 933,
            "height": 700,
            "caption": "xxx"
          }
          // additional item objects ...
        ]
      },
      // #37
      {
        "id": 37,
        "items": [{
            "img": "37/1-Flash-Art-Cuoghi.jpg",
            "width": 1215,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          },
          {
            "img": "37/1.1-Flash-Art-Cuoghi.jpg",
            "width": 552,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          },
          {
            "img": "37/2-Flash-Art-Cuoghi.jpg",
            "width": 1213,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          },
          {
            "img": "37/5-Flash-Art-Cuoghi.jpg",
            "width": 1049,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          },
          {
            "img": "37/6-Flash-Art-Cuoghi.jpg",
            "width": 467,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          },
          {
            "img": "37/8-Flash-Art-Cuoghi.jpg",
            "width": 474,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          },
          {
            "img": "37/9-Flash-Art-Cuoghi.jpg",
            "width": 1063,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art | Ph © Maria Markezi"
          }
          // additional item objects ...
        ]
      },
      // #36
      {
        "id": 36,
        "items": [{
            "img": "36/1-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 1066,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "36/2-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "36/3-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "36/4-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 467,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "36/5-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 467,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "36/6-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "36/7-Bishofberger-Glass-from-Finland-Photo-Enrico-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          }
          // additional item objects ...
        ]
      },
      // #35
      {
        "id": 35,
        "items": [{
            "img": "35/1-Installation view, Laura de Santillana and Alessandro Diaz de Santillana at YSP 2015 (2) © the artists and YSP. Photo © Jonty Wilde.jpg",
            "width": 1049,
            "height": 700,
            "caption": "Pentagram Stiftung and YSP | Ph © Jonty Wilde"
          },
          {
            "img": "35/2-Installation view, Laura de Santillana and Alessandro Diaz de Santillana at YSP 2015 (3) © the artists and YSP. Photo © Jonty Wilde.jpg",
            "width": 1049,
            "height": 700,
            "caption": "Pentagram Stiftung and YSP | Ph © Jonty Wilde"
          },
          {
            "img": "35/3-Installation view, Laura de Santillana and Alessandro Diaz de Santillana at YSP 2015 (4) © the artists and YSP. Photo © Jonty Wilde.jpg",
            "width": 1049,
            "height": 700,
            "caption": "Pentagram Stiftung and YSP | Ph © Jonty Wilde"
          },
          {
            "img": "35/4-Installation view, Laura de Santillana and Alessandro Diaz de Santillana at YSP 2015 © the artists and YSP. Photo © Jonty Wilde.jpg",
            "width": 467,
            "height": 700,
            "caption": "Pentagram Stiftung and YSP | Ph © Jonty Wilde"
          }
          // additional item objects ...
        ]
      },
      // #33
      {
        "id": 33,
        "items": [{
            "img": "33/1-032C-Lichtenstein.jpg",
            "width": 700,
            "height": 700,
            "caption": "Estate of Roy Lichtenstein | Ph © Laurie Lambrecht"
          },
          {
            "img": "33/2-032C-Lichtenstein.jpg",
            "width": 692,
            "height": 700,
            "caption": "Estate of Roy Lichtenstein | Ph © Laurie Lambrecht"
          },
          {
            "img": "33/3-032C-Lichtenstein.jpg",
            "width": 700,
            "height": 700,
            "caption": "Estate of Roy Lichtenstein | Ph © Laurie Lambrecht"
          },
          {
            "img": "33/4-032C-Lichtenstein.jpg",
            "width": 700,
            "height": 700,
            "caption": "Estate of Roy Lichtenstein | Ph © Laurie Lambrecht"
          },
          {
            "img": "33/5-032C-Lichtenstein.jpg",
            "width": 690,
            "height": 700,
            "caption": "Estate of Roy Lichtenstein | Ph © Laurie Lambrecht"
          },
          {
            "img": "33/6-032C-Lichtenstein.jpg",
            "width": 700,
            "height": 700,
            "caption": "Estate of Roy Lichtenstein | Ph © Laurie Lambrecht"
          }
          // additional item objects ...
        ]
      },
      // #32
      {
        "id": 32,
        "items": [{
            "img": "32/1-032C-Paul-Chan.jpg",
            "width": 1330,
            "height": 700,
            "caption": "Paul Chan and Badlands Unlimited | Courtesy The Artist"
          },
          {
            "img": "32/2-032C-Paul-Chan.jpg",
            "width": 525,
            "height": 700,
            "caption": "Paul Chan and Badlands Unlimited | Courtesy The Artist"
          },
          {
            "img": "32/3-032C-Paul-Chan.jpg",
            "width": 627,
            "height": 700,
            "caption": "Paul Chan and Badlands Unlimited | Courtesy The Artist"
          },
          {
            "img": "32/4-032C-Paul-Chan.jpg",
            "width": 582,
            "height": 700,
            "caption": "Paul Chan and Badlands Unlimited | Courtesy The Artist"
          },
          {
            "img": "32/5-032C-Paul-Chan.jpg",
            "width": 1330,
            "height": 700,
            "caption": "Paul Chan and Badlands Unlimited | Courtesy The Artist"
          }
          // additional item objects ...
        ]
      },
      // #34
      {
        "id": 34,
        "items": [{
            "img": "34/3-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/4-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 933,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/5-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 467,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/6-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/7-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/9-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 525,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/10-Rob-Pruitt-Flea-Market-AplusA-Gallery-Venezia-7.jpg",
            "width": 933,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          },
          {
            "img": "34/11-Gavin-Brown-Rob-Pruitt-Courtesy-A-Plus-A.jpg",
            "width": 902,
            "height": 700,
            "caption": "Courtesy A Plus A Gallery and Gavin Brown's enterprise"
          }
          // additional item objects ...
        ]
      },
      // #31
      {
        "id": 31,
        "items": [{
            "img": "31/2-Flash-Art-Kim-Gordon.jpg",
            "width": 1048,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kim Gordon–Design Office |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou | Courtesy 303 Gallery, New York"
          },
          {
            "img": "31/3-Flash-Art-Kim-Gordon.jpg",
            "width": 1048,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kim Gordon–Design Office |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou | Courtesy 303 Gallery, New York"
          },
          {
            "img": "31/4-Flash-Art-Kim-Gordon.jpg",
            "width": 1048,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kim Gordon–Design Office |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou | Courtesy 303 Gallery, New York"
          },
          {
            "img": "31/7-Flash-Art-Kim-Gordon.jpg",
            "width": 1048,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kim Gordon–Design Office |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou | Courtesy 303 Gallery, New York"
          },
          {
            "img": "31/8-Flash-Art-Kim-Gordon.jpg",
            "width": 467,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kim Gordon–Design Office |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou | Courtesy 303 Gallery, New York"
          },
          {
            "img": "31/9-Flash-Art-Kim-Gordon.jpg",
            "width": 467,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Kim Gordon–Design Office |<br> Ph © Fanis Vlastaras & Rebecca Constantopoulou | Courtesy 303 Gallery, New York"
          }
          // additional item objects ...
        ]
      },
      // #30
      {
        "id": 30,
        "items": [{
            "img": "30/1-Flash-Art-Paul-Chan.jpg",
            "width": 1328,
            "height": 700,
            "caption": "Paul Chan | Courtesy Paul Chan and Badlands Unlimited"
          },
          {
            "img": "30/2-Flash-Art-Paul-Chan.jpg",
            "width": 1328,
            "height": 700,
            "caption": "Paul Chan | Courtesy Paul Chan and Badlands Unlimited"
          },
          {
            "img": "30/4-Flash-Art-Paul-Chan.jpg",
            "width": 933,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Paul Chan |<br> Ph © Paul Chan and Badlands Unlimited"
          },
          {
            "img": "30/5-Flash-Art-Paul-Chan.jpg",
            "width": 525,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Paul Chan |<br> Ph © Paul Chan and Badlands Unlimited"
          },
          {
            "img": "30/7-Flash-Art-Paul-Chan.jpg",
            "width": 933,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Paul Chan |<br> Ph © Paul Chan and Badlands Unlimited"
          }
          // additional item objects ...
        ]
      },
      // #29
      {
        "id": 29,
        "items": [{
            "img": "29/1-Rebels-Rebel-cover.jpg",
            "width": 495,
            "height": 700,
            "caption": "REBELS REBEL| Ph © Tankboys"
          },
          {
            "img": "29/2-Rebels-Rebel-AIDS-Profiteer.jpg",
            "width": 487,
            "height": 700,
            "caption": "ACT UP Outreach Committee | Courtesy The New York Public Library"
          },
          {
            "img": "29/3-Rebels-Rebel-AIDS-1-in-6-1.jpg",
            "width": 543,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/4-Rebels-Rebel-All-People-Innocent.jpg",
            "width": 453,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/5-Rebels-Rebel-Bloody-Hands-photo-2.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/6-rebels-Rebel-AIDS-Big-Business.jpg",
            "width": 1075,
            "height": 700,
            "caption": "ACT UP Outreach Committee | Courtesy The New York Public Library"
          },
          {
            "img": "29/7-Rebels-Rebel-Civil-War.jpg",
            "width": 538,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/8-Rebels-Rebel-Four-Questions.jpg",
            "width": 472,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/9-rebels-rebel-Art-Is-Not-Enough.jpg",
            "width": 429,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/10-rebels-Renbel-KDK-photo.jpg",
            "width": 992,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/11-Rebels-Rebel-RML-Boys.jpg",
            "width": 449,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          },
          {
            "img": "29/12-rebels-Rebel-Men-Use-Condoms.jpg",
            "width": 478,
            "height": 700,
            "caption": "Gran Fury | Courtesy The New York Public Library"
          }
          // additional item objects ...
        ]
      },
      // #28
      {
        "id": 28,
        "items": [{
            "img": "28/1-I-Santillana-Installation-View-Photo-Fabio-Zonta.jpg",
            "width": 996,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Fabio Zonta"
          },
          {
            "img": "28/2-Laura-De-Satinnala-Photo-Fabio-Zonta.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Fabio Zonta"
          },
          {
            "img": "28/3-Alessandro-Diaz-De-Santillana-Photo-Fabio-Zonta.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Fabio Zonta"
          },
          {
            "img": "28/4-Laura-De-Satinnala-Photo-Fabio-Zonta.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Fabio Zonta"
          },
          {
            "img": "28/5-I-Santillana-Installation-View-Photo-Fabio-Zonta.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Fabio Zonta"
          },
          {
            "img": "28/6-Alessandro-Diaz-De-Santillana-Photo-Fabio-Zonta.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Fabio Zonta"
          }
          // additional item objects ...
        ]
      },
      // #27
      {
        "id": 27,
        "items": [{
            "img": "27/3-Tomaso-Buzzi-Photo-Enrio-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "27/4-Tomaso-Buzzi-Photo-Enrio-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "27/6-Tomaso-Buzzi-Photo-Enrio-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "27/7-Tomaso-Buzzi-Photo-Enrio-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "27/8-Tomaso-Buzzi-Photo-Enrio-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          },
          {
            "img": "27/9-Tomaso-Buzzi-Photo-Enrio-Fiorese.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Enrico Fiorese"
          }
          // additional item objects ...
        ]
      },
      // #26
      {
        "id": 26,
        "items": [{
            "img": "26/2-GTHM-Pentagram-Stiftung.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/4-GTHM-Pentagram-Stiftung.jpg",
            "width": 467,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/6-GTHM-Pentagram-Stiftung.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/7-GTHM-Pentagram-Stiftung.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/9-GTHM-Pentagram-Stiftung.jpg",
            "width": 1051,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/10-GTHM-Pentagram-Stiftung.jpg",
            "width": 464,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/11-GTHM-Pentagram-Stiftung.jpg",
            "width": 467,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          },
          {
            "img": "26/13-GTHM-Pentagram-Stiftung.jpg",
            "width": 465,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Oliver Haas"
          },
          {
            "img": "26/14-GTHM-Pentagram-Stiftung.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Hiroshi Sugimoto| Ph © Enrico Fiorese"
          }
          // additional item objects ...
        ]
      },
      // #25
      {
        "id": 25,
        "items": [{
            "img": "25/1-I-Santillana-at-MAK-Photo-Alessandro-Santillana.jpg",
            "width": 1034,
            "height": 700,
            "caption": "MAK and Pentagram Stiftung | Ph © Alessandro Diaz de Santillana"
          },
          {
            "img": "25/2-I-Santillana-at-MAK-Photo-Alessandro-Santillana.jpg",
            "width": 1050,
            "height": 700,
            "caption": "MAK and Pentagram Stiftung | Ph © Alessandro Diaz de Santillana"
          },
          {
            "img": "25/3-I-Santillana-at-MAK-Photo-Alessandro-Santillana.jpg",
            "width": 1050,
            "height": 700,
            "caption": "MAK and Pentagram Stiftung | Ph © Alessandro Diaz de Santillana"
          },
          {
            "img": "25/4-I-Santillana-at-MAK-Photo-Alessandro-Santillana.jpg",
            "width": 941,
            "height": 700,
            "caption": "MAK and Pentagram Stiftung | Ph © Alessandro Diaz de Santillana"
          },
          {
            "img": "25/5-I-Santillana-at-MAK-Photo-Alessandro-Santillana.jpg",
            "width": 1031,
            "height": 700,
            "caption": "MAK and Pentagram Stiftung | Ph © Alessandro Diaz de Santillana"
          }
          // additional item objects ...
        ]
      },
      // #24
      {
        "id": 24,
        "items": [{
            "img": "24/1-Domus-Pawel-Althamer.jpg",
            "width": 866,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Pawel Althamer | Ph © Matthew Monteith"
          },
          {
            "img": "24/2-Domus-Pawel-Althamer.jpg",
            "width": 862,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Pawel Althamer | Ph © Matthew Monteith"
          },
          {
            "img": "24/3-Domus-Pawel-Althamer.jpg",
            "width": 876,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Pawel Althamer | Ph © Matthew Monteith"
          },
          {
            "img": "24/4-Domus-Pawel-Althamer.jpg",
            "width": 876,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Pawel Althamer | Ph © Matthew Monteith"
          },
          {
            "img": "24/5-Domus-Pawel-Althamer.jpg",
            "width": 876,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Pawel Althamer | Ph © Matthew Monteith"
          },
          {
            "img": "24/6-Domus-Pawel-Althamer.jpg",
            "width": 1049,
            "height": 700,
            "caption": "DESTE Foundation for Contemporary Art and Pawel Althamer | Ph © Matthew Monteith"
          }
          // additional item objects ...
        ]
      },
      // #23
      {
        "id": 23,
        "items": [{
            "img": "23/1-Domus-Paul-Chan.jpg",
            "width": 934,
            "height": 700,
            "caption": "Paul Chan | Ph © Bisig & Bayer | Courtesy the Artist and Greene Naftali"
          },
          {
            "img": "23/2-Domus-Paul-Chan.jpg",
            "width": 934,
            "height": 700,
            "caption": "Paul Chan | Ph © Bisig & Bayer | Courtesy the Artist and Greene Naftali"
          },
          {
            "img": "23/3-Domus-Paul-Chan.jpg",
            "width": 988,
            "height": 700,
            "caption": "Paul Chan | Ph © Jason Mandella | Courtesy the Artist and Greene Naftali"
          },
          {
            "img": "23/4-Domus-Paul-Chan.jpg",
            "width": 1044,
            "height": 700,
            "caption": "Paul Chan | Ph © Jason Mandella | Courtesy the Artist and Greene Naftali"
          },
          {
            "img": "23/5-Domus-Paul-Chan.jpg",
            "width": 466,
            "height": 700,
            "caption": "Paul Chan | Ph © Jason Mandella | Courtesy the Artist and Greene Naftali"
          },
          {
            "img": "23/6-Domus-Paul-Chan.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Paul Chan | Ph © Tom Bisig | Courtesy the Artist and Greene Naftali"
          },
          {
            "img": "23/7-Domus-Paul-Chan.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Paul Chan | Ph © Jason Mandella | Courtesy the Artist and Greene Naftali"
          }
          // additional item objects ...
        ]
      },
      // #22
      {
        "id": 22,
        "items": [{
            "img": "22/1-NotVital_700Snowballs_credits-Eric-Gregory-Powell-2.jpg",
            "width": 571,
            "height": 700,
            "caption": "Pentagram Stiftung and Not Vital | Ph © Eric Gregory Powell"
          },
          {
            "img": "22/2-NotVital_700Snowballs_credits-Eric-Gregory-Powell.jpg",
            "width": 567,
            "height": 700,
            "caption": "Pentagram Stiftung and Not Vital | Ph © Eric Gregory Powell"
          },
          {
            "img": "22/3-NotVital_700Snowballs_photo-Matteo-de-Fina-7.jpg",
            "width": 530,
            "height": 700,
            "caption": "Pentagram Stiftung and Not Vital | Ph © Eric Gregory Powell"
          },
          {
            "img": "22/4-NotVital_700Snowballs_photo-Matteo-de-Fina-13.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Not Vital | Ph © Eric Gregory Powell"
          }
          // additional item objects ...
        ]
      },
      // #21
      {
        "id": 21,
        "items": [{
            "img": "21/1.Napoleone-Martinuzzi-Installation-View-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "21/2.Napoleone-Martinuzzi-Installation-View-Photo-Ettore-Bellini.jpg",
            "width": 488,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "21/3.Napoleone-Martinuzzi-Installation-View-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "21/4.Napoleone-Martinuzzi-Installation-View-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "21/6.Napoleone-Martinuzzi-Installation-View-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "21/7.Napoleone-Martinuzzi-Installation-View-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          }
          // additional item objects ...
        ]
      },
      // #20
      {
        "id": 20,
        "items": [{
            "img": "20/1.-Installation-view-De-Commarque-Hatoum-Photo-Matteo-De-Fina.jpg",
            "width": 1250,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Matteo De Fina"
          },
          {
            "img": "20/2.-Installation-view-Rist-Photo-Matteo-De-Fina.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Matteo De Fina"
          },
          {
            "img": "20/3.-Installation-view-Beshty-Weiner-Penone-Photo-Matteo-De-Fina.jpg",
            "width": 1113,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Matteo De Fina"
          },
          {
            "img": "20/4.-Installation-view-Anselmio-Sonnier-Photo-Matteo-De-Fina-.jpg",
            "width": 960,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Matteo De Fina"
          },
          {
            "img": "20/7.-Installation-view-Barry-Le-Va-Photo-Matteo-De-Fina.jpg",
            "width": 1035,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Matteo De Fina"
          },
          {
            "img": "20/8.-Installation-view-Witheread-Merz-Fabro-Hirst-Photo-Matteo-De-Fina.jpg",
            "width": 904,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Matteo De Fina"
          }
          // additional item objects ...
        ]
      },
      // #19
      {
        "id": 19,
        "items": [{
            "img": "19/1-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/2-MarcelloMaloberti_FondazioneZegnaALL_APERTO_photoAlessandroGarella.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/3-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/4-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/5-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/6-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/7-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/8-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          },
          {
            "img": "19/9-MarcelloMaloberti_FondazioneZegnaALL_APERTO2013_photoDemianDupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Marcello Maloberti | Ph © Demian Dupuis"
          }
          // additional item objects ...
        ]
      },
      // #18
      {
        "id": 18,
        "items": [{
            "img": "18/1-Something-Good-collection.jpg",
            "width": 981,
            "height": 700,
            "caption": "SOMETHING GOOD | Ph © Zaven"
          },
          {
            "img": "18/2-Something-Good-collection.jpg",
            "width": 981,
            "height": 700,
            "caption": "SOMETHING GOOD | © Matteo Zorzenoni"
          },
          {
            "img": "18/3-Something-Good-collection.jpg",
            "width": 905,
            "height": 700,
            "caption": "SOMETHING GOOD | © Giorgio Biscaro"
          },
          {
            "img": "18/4-Something-Good-collection.jpg",
            "width": 607,
            "height": 700,
            "caption": "SOMETHING GOOD | © Zaven"
          },
          {
            "img": "18/5-Something-Good-collection.jpg",
            "width": 700,
            "height": 700,
            "caption": "SOMETHING GOOD | © Zaven"
          },
          {
            "img": "18/6-Something-Good-collection.jpg",
            "width": 555,
            "height": 700,
            "caption": "SOMETHING GOOD | © Giorgio Biscaro"
          },
          {
            "img": "18/7-Something-Good-collection.jpg",
            "width": 981,
            "height": 700,
            "caption": "SOMETHING GOOD | © Giorgio Biscaro"
          },
          {
            "img": "18/8-Something-Good-collection.jpg",
            "width": 900,
            "height": 700,
            "caption": "SOMETHING GOOD | © Giorgio Biscaro"
          }
          // additional item objects ...
        ]
      },
      // #17
      {
        "id": 17,
        "items": [{
            "img": "17/1-Querini-Jacob-Hashimoto-Courtesy-Studio-la-Citta.jpg",
            "width": 933,
            "height": 700,
            "caption": "Jacob Hashimoto | Courtesy Studio la Città"
          },
          {
            "img": "17/2-Querini-Jacob-Hashimoto-Courtesy-Studio-la-Citta.jpg",
            "width": 525,
            "height": 700,
            "caption": "Jacob Hashimoto | Courtesy Studio la Città"
          },
          {
            "img": "17/3-Querini-Jacob-Hashimoto-Courtesy-Studio-la-Citta.jpg",
            "width": 933,
            "height": 700,
            "caption": "Jacob Hashimoto | Courtesy Studio la Città"
          },
          {
            "img": "17/4-Querini-Jacob-Hashimoto-Courtesy-Studio-la-Citta.jpg",
            "width": 933,
            "height": 700,
            "caption": "Jacob Hashimoto | Courtesy Studio la Città"
          },
          {
            "img": "17/5-Querini-Jacob-Hashimoto-Courtesy-Studio-la-Citta.jpg",
            "width": 981,
            "height": 700,
            "caption": "Jacob Hashimoto | Courtesy Studio la Città"
          }
          // additional item objects ...
        ]
      },
      // #16
      {
        "id": 16,
        "items": [{
            "img": "16/1---Carlo-Scarpa-MET.jpg",
            "width": 876,
            "height": 700,
            "caption": "Metropolitan Museum of Art| Courtesy Le Stanze del Vetro"
          },
          {
            "img": "16/2---Carlo-Scarpa-MET.jpg",
            "width": 1244,
            "height": 700,
            "caption": "Metropolitan Museum of Art| Courtesy Le Stanze del Vetro"
          },
          {
            "img": "16/3---Carlo-Scarpa-MET.jpg",
            "width": 1341,
            "height": 700,
            "caption": "Metropolitan Museum of Art| Courtesy Le Stanze del Vetro"
          },
          {
            "img": "16/4---Carlo-Scarpa-MET.jpg",
            "width": 1244,
            "height": 700,
            "caption": "Metropolitan Museum of Art| Courtesy Le Stanze del Vetro"
          },
          {
            "img": "16/5---Carlo-Scarpa-MET.jpg",
            "width": 1244,
            "height": 700,
            "caption": "Metropolitan Museum of Art| Courtesy Le Stanze del Vetro"
          },
          {
            "img": "16/6---Carlo-Scarpa-MET.jpg",
            "width": 1300,
            "height": 700,
            "caption": "Metropolitan Museum of Art| Courtesy Le Stanze del Vetro"
          }
          // additional item objects ...
        ]
      },
      // #15
      {
        "id": 15,
        "items": [{
            "img": "15/1-PIG-Corita-Kent-Microscope.jpg",
            "width": 1063,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/2-PIG-Corita-Kent-Microscope.jpg",
            "width": 1014,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/3-PIG-Corita-Kent-Microscope.jpg",
            "width": 1031,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/5-PIG-Corita-Kent-Microscope.jpg",
            "width": 1051,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/6-PIG-Corita-Kent-Microscope.jpg",
            "width": 1052,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/8-PIG-Corita-Kent-Microscope.jpg",
            "width": 1039,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/9-PIG-Corita-Kent-Microscope.jpg",
            "width": 1033,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/10-PIG-Corita-Kent-Microscope.jpg",
            "width": 474,
            "height": 700,
            "caption": "Americas Society"
          },
          {
            "img": "15/11-PIG-Corita-Kent-Microscope.jpg",
            "width": 1034,
            "height": 700,
            "caption": "Americas Society"
          }
          // additional item objects ...
        ]
      },
      // #14
      {
        "id": 14,
        "items": [{
            "img": "14/1-PIG-women-NB.jpg",
            "width": 482,
            "height": 700,
            "caption": "Nairy Baghramian | Ph © Piotr Niepsuj"
          },
          {
            "img": "14/3-PIG-women-KC.jpg",
            "width": 994,
            "height": 700,
            "caption": "Keren Cytter | Ph © Todd Jordan"
          },
          {
            "img": "14/4-PIG-women-IE.jpg",
            "width": 1041,
            "height": 700,
            "caption": "Ida Ekblad | Ph © Lars Botten"
          },
          {
            "img": "14/5-PIG-women-EF.jpg",
            "width": 537,
            "height": 700,
            "caption": "Elena Filipovic | Ph © Sarah Hermans"
          },
          {
            "img": "14/7-PIG-women-CK.jpg",
            "width": 1014,
            "height": 700,
            "caption": "Chris Kraus | Ph © Maggie Lee"
          },
          {
            "img": "14/10-PIG-women-AP.jpg",
            "width": 563,
            "height": 700,
            "caption": "Amalia Pica | Ph © Luca Campri"
          },
          {
            "img": "14/11-PIG-women-BR.jpg",
            "width": 982,
            "height": 700,
            "caption": "Beatrix Ruf | Ph © Lukas Wassmann"
          }
          // additional item objects ...
        ]
      },
      // #13
      {
        "id": 13,
        "items": [{
            "img": "13/1.Carlo-Scarpa-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "13/2.Carlo-Scarpa-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "13/3.Carlo-Scarpa-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "13/4.Carlo-Scarpa-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "13/6.Carlo-Scarpa-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          },
          {
            "img": "13/7.Carlo-Scarpa-Photo-Ettore-Bellini.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Pentagram Stiftung and Fondazione Giorgio Cini | Ph © Ettore Bellini"
          }
          // additional item objects ...
        ]
      },
      // #12
      {
        "id": 12,
        "items": [{
            "img": "12/1-Fondazione-Zegna-.-Roman-Signer-.-Horloge-.-ph-Demian-Dupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Roman Signer | Ph © Demian Dupuis"
          },
          {
            "img": "12/2-Fondazione-Zegna-.-Roman-Signer-.-Horloge-.-ph-Demian-Dupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Roman Signer | Ph © Demian Dupuis"
          },
          {
            "img": "12/3-Fondazione-Zegna-.-Roman-Signer-.-Horloge-.-ph-Demian-Dupuis.jpg",
            "width": 467,
            "height": 700,
            "caption": "Fondazione Zegna and Roman Signer | Ph © Demian Dupuis"
          },
          {
            "img": "12/4-Fondazione-Zegna-.-Roman-Signer-.-Horloge-.-ph-Demian-Dupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Roman Signer | Ph © Demian Dupuis"
          },
          {
            "img": "12/5-Fondazione-Zegna-.-Roman-Signer-.-Horloge-.-ph-Demian-Dupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Roman Signer | Ph © Demian Dupuis"
          },
          {
            "img": "12/6-Fondazione-Zegna-.-Roman-Signer-.-Horloge-.-ph-Demian-Dupuis.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Zegna and Roman Signer | Ph © Demian Dupuis"
          }
          // additional item objects ...
        ]
      },
      // #11
      {
        "id": 11,
        "items": [{
            "img": "11/1-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/2-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/3-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/4-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/5-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/6-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/7-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          },
          {
            "img": "11/8-Baton_Sinister-Photo-Giulio-Squillacciotti.jpg",
            "width": 1053,
            "height": 700,
            "caption": "OCA Norway and Bjarne Melgaard | Ph © Giulio Squillacciotti"
          }
          // additional item objects ...
        ]
      },
      // #10
      {
        "id": 10,
        "items": [{
            "img": "10/1-OCA-IUAV-Beyond-Death.jpg",
            "width": 495,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Courtesy An Art Service"
          },
          {
            "img": "10/2-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/3-OCA-IUAV-Beyond-Death.jpg",
            "width": 1116,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/4-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/5-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/6-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/7-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/8-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          },
          {
            "img": "10/9-OCA-IUAV-Beyond-Death.jpg",
            "width": 1050,
            "height": 700,
            "caption": "IUAV University and Bjarne Melgaard | Ph © Corinne Mazzoli"
          }
          // additional item objects ...
        ]
      },
      // #9
      {
        "id": 9,
        "items": [{
            "img": "9/1-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/2-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/3-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 467,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/4-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 467,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/5-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 467,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/6-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/7-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 1050,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/8-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 467,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          },
          {
            "img": "9/9-OCA-State-of-Things-Photo-Giulio-Squillacciotti.jpg",
            "width": 467,
            "height": 700,
            "caption": "OCA Norway | Ph © Giulio Squillacciotti"
          }
          // additional item objects ...
        ]
      },
      // #8
      {
        "id": 8,
        "items": [{
            "img": "8/3-The-Book-Affair.jpg",
            "width": 1050,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/4-The-Book-Affair.jpg",
            "width": 1050,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/5-The-Book-Affair.jpg",
            "width": 1050,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/6-The-Book-Affair.jpg",
            "width": 1050,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/8-The-Book-Affair.jpg",
            "width": 1050,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/9-The-Book-Affair.jpg",
            "width": 1050,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/1-The-Book-Affair.jpg",
            "width": 757,
            "height": 824,
            "caption": "The Book Affair | Ph © Tankboys"
          },
          {
            "img": "8/2-The-Book-Affair.jpg",
            "width": 537,
            "height": 700,
            "caption": "The Book Affair | Ph © Tankboys"
          }
          // additional item objects ...
        ]
      },
      // #7
      {
        "id": 7,
        "items": [{
            "img": "7/1-Fondazione_March-Photo-Tankboys.jpg",
            "width": 1051,
            "height": 700,
            "caption": "Fondazione March | Ph © Tankboys"
          }
          // additional item objects ...
        ]
      },
      // #6
      {
        "id": 6,
        "items": [{
            "img": "6/1-Fondazione_March-Photo-Tankboys.jpg",
            "width": 885,
            "height": 700,
            "caption": "Fondazione March | Ph © Tankboys"
          }
          // additional item objects ...
        ]
      },
      // #5
      {
        "id": 5,
        "items": [{
            "img": "5/1-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Berger & Berger | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/2-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Caruso St John + Thomas Demand | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/3-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Cerith Wyn Evans | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/4-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Do-ho Suh + Suh Architects | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/6-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Anton Garcia-Abril + Ensamble Studio | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/7-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Pezo von Ellirichshausen Architects | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/8-People-Meet-In-Architecture.jpg",
            "width": 1204,
            "height": 700,
            "caption": "Rem Koolhaas | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/9-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Smiljan Radic + Marcela Correa | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "5/10-People-Meet-In-Architecture.jpg",
            "width": 1054,
            "height": 700,
            "caption": "Transsolar + Tetsuo Kondo | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          }
          // additional item objects ...
        ]
      },
      // #4
      {
        "id": 4,
        "items": [{
            "img": "4/1-Fondazione_Buziol-New-York-Memories-Photo-Tankboys.jpg",
            "width": 467,
            "height": 700,
            "caption": "Fondazione Claudio Buziol | Ph © Tankboys"
          },
          {
            "img": "4/3-Fondazione_Buziol-New-York-Memories-Photo-Tankboys.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Claudio Buziol | Ph © Tankboys"
          },
          {
            "img": "4/4-Fondazione_Buziol-New-York-Memories-Photo-Tankboys.jpg",
            "width": 467,
            "height": 700,
            "caption": "Fondazione Claudio Buziol | Ph © Tankboys"
          },
          {
            "img": "4/5-Fondazione_Buziol-New-York-Memories-Photo-Tankboys.jpg",
            "width": 467,
            "height": 700,
            "caption": "Fondazione Claudio Buziol | Ph © Tankboys"
          },
          {
            "img": "4/6-Fondazione_Buziol-New-York-Memories-Photo-Tankboys.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Fondazione Claudio Buziol | Ph © Tankboys"
          },
          {
            "img": "4/7-Fondazione_Buziol-New-York-Memories-Photo-Tankboys.jpg",
            "width": 467,
            "height": 700,
            "caption": "Fondazione Claudio Buziol | Ph © Tankboys"
          }
          // additional item objects ...
        ]
      },
      // #3
      {
        "id": 3,
        "items": [{
            "img": "3/1-Making-Worlds.jpg",
            "width": 729,
            "height": 700,
            "caption": "John Baldessari | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/2-Making-Worlds.jpg",
            "width": 933,
            "height": 700,
            "caption": "Héctor Zamora | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/3-Making-Worlds.jpg",
            "width": 933,
            "height": 700,
            "caption": "Paul Chan | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/4-Making-Worlds.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Lygia Pape | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/5-Making-Worlds.jpg",
            "width": 1050,
            "height": 700,
            "caption": "Moshekwa Langa | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/6-Making-Worlds.jpg",
            "width": 1041,
            "height": 700,
            "caption": "Tomas Saraceno | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/7-Making-Worlds.jpg",
            "width": 438,
            "height": 700,
            "caption": "Spencer Finch | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/8-Making-Worlds.jpg",
            "width": 1077,
            "height": 700,
            "caption": "Jorge Otero-Pailos | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "3/9-Making-Worlds.jpg",
            "width": 933,
            "height": 700,
            "caption": "Tobias Rehberger | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          }
          // additional item objects ...
        ]
      },
      // #2
      {
        "id": 2,
        "items": [{
            "img": "2/1-XYZ-Manifesto-Photo-Tankboys.jpg",
            "width": 820,
            "height": 700,
            "caption": "XYZ Gallery | Ph © Tankboys"
          },
          {
            "img": "2/2-XYZ-Manifesto-Garland-Photo-Tankboys.jpg.jpg",
            "width": 815,
            "height": 700,
            "caption": "XYZ Gallery | Ph © Tankboys"
          },
          {
            "img": "2/3-XYZ-Manifesto-Mau-Photo-Tankboys.jpg.jpg",
            "width": 482,
            "height": 700,
            "caption": "XYZ Gallery | Ph © Tankboys"
          },
          {
            "img": "2/4-XYZ-Manifesto-Mari-Photo-Tankboys.jpg.jpg",
            "width": 857,
            "height": 700,
            "caption": "XYZ Gallery | Ph © Tankboys"
          }
          // additional item objects ...
        ]
      },
      // #1
      {
        "id": 1,
        "items": [{
            "img": "1/1-Beyond-Archictecture.jpg",
            "width": 1046,
            "height": 700,
            "caption": "Raumlabor | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/3-Beyond-Archictecture.jpg",
            "width": 467,
            "height": 700,
            "caption": "Asymptote | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/4-Beyond-Archictecture.jpg",
            "width": 1044,
            "height": 700,
            "caption": "Bjarke Ingels | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/5-Beyond-Archictecture.jpg",
            "width": 466,
            "height": 700,
            "caption": "Aranda/Lasch | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/6-Beyond-Archictecture.jpg",
            "width": 544,
            "height": 700,
            "caption": "MAD Office| Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/7-Beyond-Archictecture.jpg",
            "width": 1245,
            "height": 700,
            "caption": "Syd Matters | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/8-Beyond-Archictecture.jpg",
            "width": 933,
            "height": 700,
            "caption": "Droog Design | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/9-Beyond-Archictecture.jpg",
            "width": 1120,
            "height": 700,
            "caption": "UNStudio | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
          },
          {
            "img": "1/10-Beyond-Archictecture.jpg",
            "width": 884,
            "height": 700,
            "caption": "Coop Himmelb(l)au | Ph © Giorgio Zucchiatti | Courtesy La Biennale di Venezia"
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
