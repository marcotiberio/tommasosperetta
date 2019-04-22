# tommasosperetta.com

Tommaso Speretta, based in Venice, has worked for many internationl art institutions, such as the Venice Biennale and the Office for Contemporary Art Norway. He published a critical essay on the art and history of Sister Corita Kent and contributed writing on the role of graphic design today for the exhibition catalogue It's Graphics Now! The Words of the Future at Pitti Immagine 2012. In 2011 he worked with Bjarne Melgaard to organize the MA program Beyond Death: Viral Discontents and Contemporary Notion about AIDS at the IUAV University in Venice, and co-curated the exhibition Baton Sinister as part of Norway's contribution at the 2011 Art Biennale. REBELS REBELS is his first book published by MER. Paper Kunsthalle.

Using:
https://www.scalable-lightbox.com/

## Adding new Galleries with Scalable Lightbox

If you want to add new galleries for any project, first create a new folder at `assets/img/lightbox/` and name it according to your project or row (e.g. 'jeff_koons or 58'). Add all your image files in there.

Now you need to adjust the Lightbox code (inside lightbox.js). For each new gallery, you will have to add a additional item to the `data` property. It it important to give your new gallery a new `id`, I used the row number as id. You can basically copy this bit for each new gallery, and add the image files to it.

```{
              "id": 40,
              "items": [{
                  "img": "53/1-Athens-Dialogues-DESTE.jpg",
                  "width": 251,
                  "height": 251,
                  "caption": "Item #1"
                },
                {
                  "img": "53/athens_dialogues/2-Athens-Dialogues-DESTE.jpg",
                  "width": 251,
                  "height": 251,
                  "caption": "Item #2"
                },
                // additional images ...
              ]
            },
```

Now scroll up your `index.html` and let's talk about your mark-up. :)

Inside your Lightbox mark-up, you can now link to the `id` of the gallery. Check out the `href='#39'` reference inside the `<a>` element, this is the `id` of your gallery that you defined above. 

We also need to add a `data-index` tag to each image element so that the gallery displays the image that you clicked on and not always the first image. I added these data-attributes in the code.

```
 <div class="container-img">
   <!-- ScalableLightbox -->
    <div id="projects-container" class="clearfix">
      <a class="project-item" href="#39" data-index="0">
        <div class="img">
          <img src="assets/img/lightbox/jeff_koons/asset-6.png" style="width: 100%;" />
        </div>
      </a>
    </div>
    ....
    more images
    ....
  </div>
  ```

  That should be it!