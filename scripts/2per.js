
function logic2(){
  const payElements = [
      document.querySelector("#twopay1"),
      document.querySelector("#twopay2"),
    ];
    
  let paymentArray = [];
    
  for (const payElement of payElements) {
      paymentArray.push(payElement.value);
  }
  paymentArray = paymentArray.map(function(val, i) {
      return val === '' ? 0 : val;
  });
  
  paymentArray = paymentArray.map(function (x) {
      return parseFloat(x, 10);
  });
  
  let groupTotal = paymentArray.reduce(sum); //adds all expenses
  function sum(total, num) {
      return total + num
  };
  const perMemCost = groupTotal / 2 //divides all expenses by 2

  const contrib = paymentArray.map(function(element){ //rounds each index to the nearest hundredths
      return Math.round((element - perMemCost) * 100) / 100;
   });
  
  //let contrib = [-31.8, 18.2, 168.2, -222.8, 68.2]

  let negativeTotal = 0;
  let negativeIndices = [];
  let negPer = [];

  for (let i = 0; i < contrib.length; i++) {
  if (contrib[i] < 0) {
      let negativePerson = `&#x2022; Person ${i + 1}: ${contrib[i]}`
      negativeTotal += contrib[i];
      negativeIndices.push(i);
      negPer.push(negativePerson)
  }
  }
  const names = ["Test","Testt"]
  let namedIndex = [];
  for (let i = 0; i < negativeIndices.length; i++) {
    let tets = names.at(i);
    namedIndex.push(tets)
  }

  let negativePer = negativeIndices.map((index, i) => `Person ${index + 1}`); //assigns a person number to each negative int
  negativePer = negativePer.join(', ');

  let positiveIndices = [];

  for (let i = 0; i < contrib.length; i++) {
  if (contrib[i] > 0) {
      let personString = `&#x2022; Person ${i + 1}: ${contrib[i]}`;
      positiveIndices.push(personString);
  }
  }

  let negativeList = negPer.toString() 
  negativeList = negativeList.replaceAll(',', '<br>')
  negativeList = negativeList.concat('<br>')
  positivePer = positiveIndices.join('<br>')
  negativeTotal = Math.abs(Math.round(negativeTotal * 1000) / 1000);
  let startString = 'The total group expense is (Sum of all expenses):';
  let finalOutput = startString.concat(' ', groupTotal, '<br><br> Each member\'s equal cost (x) is calculated by adding all expenses and dividing it by the number of people (Group\'s Total/5): ', perMemCost, '<br><br>', 'Each person\'s contribution is calculated by: Amount Spent = y => (y-x) (negative value people give positive value people their contribution) which are listed below:<br>', negativeList, '<br>The persons listed above should combine their contributions amounting to:', ' ', negativeTotal, ' ', 'and give:<br>', ' ', positivePer.toString())

  //console.log(negativeList)
  console.log(namedIndex)
  console.log(negativeIndices)
  //console.log(negativePer)
  /*
  console.log(paymentArray);
  console.log(paymentLogic);
  console.log(division);
  console.log(contrib);
  
  console.log(positiveIndices)
  console.log(negativeTotal)
  console.log(positivePer)
  console.log(negativePer, ' ', 'should combine their assigned costs amounting to:', ' ', negativeTotal, ' ', 'and give', ' ', positivePer.toString())
*/
  document.querySelector('#output2per').innerHTML = finalOutput;
  document.querySelector('#output2per').removeAttribute("hidden");
}

function reload2(){
  var container = document.getElementById("twoperform");
  var content = container.innerHTML;
  container.innerHTML= content; 
  
  document.querySelector('#output2per').setAttribute("hidden", "true");
 //this line is to watch the result in console 
  console.log("Refreshed"); 
}