// Increment heart count on each heart button click

const heartButtons = document.getElementsByClassName('heart-button');
for (const heartBtn of heartButtons) {
  heartBtn.addEventListener('click', function () {
    let heartNumberDemo = parseInt(document.getElementById('heart-number').innerText);
    heartNumberDemo++;
    document.getElementById('heart-number').innerText = heartNumberDemo;
  })
}

// Utility function to retrieve the subtitle text from an element by its ID
function getSubtitle(title) {
  const subTitle = document.getElementById(title).innerText;
  return subTitle;
}