// LOADER

jQuery(document).ready(function() {
  /* Show the HTML page only after the js and css are completely loaded */
  delayShow();
});

function delayShow() {
  var secs = 1000;
  setTimeout('jQuery("body").css("visibility","visible");', secs);
}

// SWIPE
$('.carousel').carousel().swipeCarousel({});



// LIGHTBOX
// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
// });

// HEADER
// $("#title").click( function() { $("#sidebar").toggle(); } );
// $("#sidebar-title").click( function() { $("#sidebar").hide(); } );


// MAINTABLE



// OLD SEARCH
// function searchFunction() {
//   const input = document.getElementById("searchInput"),
//     filter = input.value.toUpperCase(),
//     table = document.getElementById("mainTableBody"),
//     entries = table.querySelectorAll("tr:not(.projectinfo)");

//   // Loop all tr elements
//   [...entries].forEach(tr => {
//     // Loop all td elements, checking if innerHTML contains #searchInput value
//     const containsSearch = [...tr.getElementsByTagName("td")].some(td =>
//       td.innerHTML.toUpperCase().includes(filter)
//     );

//     tr.style.display = containsSearch ? "table-row" : "none";
//   });
// }
