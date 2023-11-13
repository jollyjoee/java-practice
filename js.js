
function logic(){
    const payElements = [
        document.querySelector("#pay1"),
        document.querySelector("#pay2"),
        document.querySelector("#pay3"),
        document.querySelector("#pay4"),
        document.querySelector("#pay5"),
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
    
    let paymentLogic = paymentArray.reduce(sum); //adds all expenses
    function sum(total, num) {
        return total + num
    };
    const division = paymentLogic / 5 //divides all expenses by 5

    const contrib = paymentArray.map(function(element){ //rounds each index to the nearest hundredths
        return Math.round((element - division) * 100) / 100;
     });
    
    //let contrib = [-31.8, 18.2, 168.2, -222.8, 68.2]

    let negativeTotal = 0;
    let negativeIndices = [];

    for (let i = 0; i < contrib.length; i++) {
    if (contrib[i] < 0) {
        negativeTotal += contrib[i];
        negativeIndices.push(i);
    }
    }
    let negativePer = negativeIndices.map((index, i) => `Person ${index + 1}`); //assigns a person number to each negative int
    negativePer = negativePer.join(', ');

    let positiveIndices = [];

    for (let i = 0; i < contrib.length; i++) {
    if (contrib[i] > 0) {
        let personString = `Person ${i + 1}: ${contrib[i]}`;
        positiveIndices.push(personString);
    }
    }

    positivePer = positiveIndices.join(', ')
    negativeTotal = Math.abs(Math.round(negativeTotal * 1000) / 1000);
    let finalOutput = negativePer.concat(' ', 'should combine their assigned costs amounting to:', ' ', negativeTotal, ' ', 'and give ', ' ', positivePer.toString())

    /*
    console.log(paymentArray);
    console.log(paymentLogic);
    console.log(division);
    console.log(contrib);
    console.log(negativeIndices)
    console.log(negativePer)
    console.log(positiveIndices)
    console.log(negativeTotal)
    //console.log(positivePer)
    console.log(negativePer, ' ', 'should combine their assigned costs amounting to:', ' ', negativeTotal, ' ', 'and give', ' ', positivePer.toString())
*/
    document.querySelector('#output5per').innerHTML = finalOutput;
    document.querySelector('#output5per').removeAttribute("hidden");
}

function reload(){
    var container = document.getElementById("fiveperform");
    var content = container.innerHTML;
    container.innerHTML= content; 
    
    document.querySelector('#output5per').setAttribute("hidden", "true");
   //this line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
}