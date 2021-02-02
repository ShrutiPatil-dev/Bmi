function handleClick(){
    var hcm = (document.getElementById("fheight").value)*30.48 + (document.getElementById("iheight").value)*2.54;
    var weight = document.getElementById("weight").value;
    var height =(hcm)/100;

    if(weight > 0 && height > 0 ){
        var finalBMI = weight/(Math.pow(height,2));
        document.getElementById("bmi").value = finalBMI;

        if(finalBMI < 18.5){
            document.getElementById("status").value = "Underweight"
        }
        if(finalBMI > 18.5 && finalBMI < 25){
            document.getElementById("status").value = "Normal"
        }
        if(finalBMI > 25){
            document.getElementById("status").value = "Overweight"
        }
        if(finalBMI > 30){
            document.getElementById("status").value = "Obese"
        }
    }
    else{
        alert("Please enter correct information")
    }
 }
