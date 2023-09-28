    //    index:     012345678
    let variable1 = "kismacska" //string
    let variable2 = 101 //number
    let variable3 = true //boolean
    let variable4 = null //null
    
    //   index:     0        1       2        3         4        5       6
    let array = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta"]  // ez egy sor amiben stringek(szavak)
    
    //   index:   0  1  2  3  4
    let array2 = [1, 2, 3, 4, 5]                                 // ez egy sor amiben számok vannak 
    
    //   index:      0     1    2        3       4      5
    let array3 = ["autó", 54, true, undefined, false, "62"]      // ez egy sor amiben minden van 
    
    //   index:        0          1          2         3
    let array4 = [variable1, variable2, variable3, variable4]    // ez egy sor amiben a fenti változók vannak
    
    // console.log(array[0])           // logolja az elsö sor 0 index számú értékét
    // console.log(array[1])           // logolja az elsö sor 1 index számú értékét
    // console.log(array[2])
    // console.log(array[3])

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



                     // amíg < elsö sor hossza
    for (let index = 0; index < array.length; index++) {

      // első sor "indexedik" számú tagjának hossza   // azaz alpha = 5  //   5 % 2 === 1 
      if (array[index].length % 2 === 1) {
        console.log(array[index], 'páratlan számú karakterből áll')
      } else {
        console.log(array[index], 'páros számú karakterből áll')
      }
        //console.log('end of iteration')
     }
    




    for (let index = 0; index < array.length; index++) {

      // elsö sor "indexedik" tagja tartalmaz l betűt
      if (array[index].includes('l')) {
        console.log(array[index], ' tartalmaz L betűt')
      // ha nem igaz
      } else {
        console.log(array[index], ' nem tartalmaz L betűt')
      }
      //console.log('end of iteration')
    }
    


    for (let index = 0; index < variable1.length; index++) {  // működik a változókkal is 
      console.log(variable1[index])
      //console.log('end of iteration')
    } 
      
    console.log('end of code')