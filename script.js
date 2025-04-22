var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")


page1Content.addEventListener("mousemove", function(dets) {
  // console.log(dets.x, dets.y)
  cursor.style.left = dets.x + "px"
  cursor.style.top = dets.y + "px"  
})


// // Add event listener to the entire document instead of just page1Content
// document.addEventListener("mousemove", function(event) {
//   // Check if the event occurred within the boundaries of page1Content
//   const rect = page1Content.getBoundingClientRect();
//   if (
//     event.clientX >= rect.left &&
//     event.clientX <= rect.right &&
//     event.clientY >= rect.top &&
//     event.clientY <= rect.bottom
//   ) {
//     console.log("Mouse is over page1Content", event.clientX, event.clientY);
    
//     // Optional: Update cursor position if needed
//     if (cursor) {
//       cursor.style.left = event.clientX + "px";
//       cursor.style.top = event.clientY + "px";
//     }
//   }
// });