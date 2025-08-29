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

// Getting number function
function getNumber(number) {
  const phoneNumber = document.getElementById(number).innerText;
  return phoneNumber;
}

// Store all call history data
const callHistoryData = [];
function callButton(btnId, title, number) {
  document.getElementById(btnId)
    .addEventListener('click', function () {
      let balance = parseInt(document.getElementById('call-balance-coin').innerText);
      if (balance <= 0) {
        alert('❌ Not enough coins! Need minimum 20 coins to call.');
        return;
      }
      balance -= 20;
      document.getElementById('call-balance-coin').innerText = balance;
      let subTitle = getSubtitle(title);
      let phoneNumber = getNumber(number);
      const data = {
        title: subTitle,
        number: phoneNumber,
        date: new Date().toLocaleTimeString()
      }
      callHistoryData.push(data);
      callHistory(btnId);
      alert(`📞 calling ${subTitle} ${phoneNumber}`);
    })
}

for (let i = 1; i <= 9; i++) {
  callButton(`callBtn-${i}`, `subtitle-${i}`, `phone-number-${i}`);
}

// This function shows the call history
function callHistory(clickedId) {
  const callHistoryContainer = document.getElementById('call-history-container');
  callHistoryContainer.innerText = '';

  for (const data of callHistoryData) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="p-3 mt-3 bg-[#FAFAFA] rounded-md flex items-center justify-between">
        <div>
          <h3 class="font-semibold">${data.title}</h3>
          <p>${data.number}</p>
        </div>
        <p class="text-sm">${data.date}</p>
      </div>
    `;
    callHistoryContainer.appendChild(div);
  }
}

// This function clears the call history when the clear button is clicked
document.getElementById('clear-button')
  .addEventListener('click', function () {
    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerHTML = '';
    callHistoryData.length = 0;
  })
