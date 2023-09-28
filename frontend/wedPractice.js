let counter = 5
    
while (counter >= 0) {      // 5 >= 0      0 >= 0 
 console.log(counter)       // log = 5    log = 0
 counter--                  // 5 - 1       0 - 1
}
                            //  itt a counter -1 maradt

while (counter < 5) {       // -1 < 5 
  console.log(counter)      // log = -1
  counter = counter + 1     // -1 + 1 
}


  //   kezdő szám;    amíg <= 5;   kezdő szám + 1
for (let counter = 0; counter <= 5; counter++) {  // for ciklus ami 0-5 -ig elszámol
console.log(counter);    
}


//   index:     0        1       2        3         4        5       6
let array = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta"];


for (let index = 0; index < array.length; index++) {
  // első sor "indexedik" számú tagjának hossza   // azaz alpha = 5; beta = 4
  if (array[index].length % 2 === 1) {                               //  5 / 2 = 1 === 1 tehát true 
    console.log(array[index], "páratlan számú karakterből áll");      // 4 % 2 = 0 !== 1 tehát false
  } else {                                                          
    console.log(array[index], "páros számú karakterből áll");
  }
  //console.log("end of iteration");
}

for (let index = 0; index < array.length; index++) {
  console.log((index+1) + ':' + array[index])
  }
  
  for (let index = 0; index < array.length; index++) {

    // elsö sor "indexedik" tagja tartalmaz l betűt
    if (array[index].includes('l')) {
      console.log(array[index], ' tartalmaz L betűt')
    // ha nem igaz
    } else {
      console.log(array[index], ' nem tartalmaz L betűt')
    }
  }
  
  
  console.log("THE END")