


document.addEventListener('DOMContentLoaded', () => {
    const players = [
        { id: 'select-btn-1', name: 'Rohit Sharma' },
        { id: 'select-btn-2', name: 'Sakib Al Hasan' },
        { id: 'select-btn-3', name: 'Cris gail' },
        { id: 'select-btn-4', name: 'Jason Roy' },
        { id: 'select-btn-5', name: 'Jeo-Root' },
        { id: 'select-btn-6', name: 'Joss buttler' },
        { id: 'select-btn-7', name: 'Muhammad Rizwan' },
        { id: 'select-btn-8', name: 'Mahela Jayawardene' },
        { id: 'select-btn-9', name: 'MS Dhoni' },
        
        
    ];
  


    const orderList = document.getElementById('list-name');

    let playerCount = 0;
    const maxPlayers = 5;
  
    document.querySelectorAll('.add-player-btn').forEach(button => {
        button.addEventListener('click', () => {
          if (playerCount >= maxPlayers) {
              alert('Sorry,Can,t add more than 5 players.');
              return;
          }

        const playerId = button.getAttribute('id');
        const player = players.find(p => p.id == playerId);
  
        if (player) {
            const listItem = document.createElement('li');
            listItem.textContent = player.name;
            orderList.appendChild(listItem);


            button.textContent = 'Added';
            button.disabled = true;

            playerCount++;
        }
      });
    });



});
  

document.getElementById('calculate-btn-1').addEventListener('click',function () {
    const previousInputFliedString = document.getElementById('input-fld-1');
    const newInputFlied = previousInputFliedString.value;
    const mainInputFlied = parseFloat(newInputFlied);
    previousInputFliedString.value = "";

    
    const numberOfPlayers = document.getElementById('list-name').childElementCount;
    
    const updateCalculateBlance = mainInputFlied * numberOfPlayers;
    



    const amountBalace = document.getElementById('amount');
    
    const previousAmountBalaceString = amountBalace.innerText;
    const newAmountBalace = parseFloat(previousAmountBalaceString);

    const totalUpdateBalace = updateCalculateBlance + newAmountBalace;

    amountBalace.innerText = totalUpdateBalace.toFixed(2);
    
   
})


document.getElementById('calculate-btn-2').addEventListener('click', function () {

    const managerCost = document.getElementById('input-fld-2');
    const previousInputFldString = managerCost.value;
    const managerCurrentInputFld = parseFloat(previousInputFldString);
    managerCost.value = "";


    const coachCost = document.getElementById('input-fld-3');
    const coachPreviousInputFldString = coachCost.value;
    const coachCurrentInputFld = parseFloat(coachPreviousInputFldString);
    coachCost.value = "";
    
    const totalAvarage =  managerCurrentInputFld + coachCurrentInputFld;


    const amountBalace = document.getElementById('amount');
    
    const previousAmountBalaceString = amountBalace.innerText;
    const newAmountBalace = parseFloat(previousAmountBalaceString);

 
    const totalBalace = document.getElementById('total-amount');
    const totalBalaceString = totalBalace.innerText;
    const allTotalAmoutBalance = parseFloat(totalBalaceString);


    const totalAvarageBalance = allTotalAmoutBalance + totalAvarage + newAmountBalace;


    totalBalace.innerText = totalAvarageBalance.toFixed(2);



});







