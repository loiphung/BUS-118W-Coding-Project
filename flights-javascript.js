function displayFunction(){

    event.preventDefault(); 

    if (document.getElementById("one-way").checked == true){
        document.getElementById("radio-value").innerHTML="One-Way"
    }
    else{
        document.getElementById("radio-value").innerHTML="Round-trip"
    }

    var adultsValue = document.getElementById("adults").value;
    document.getElementById("adult-number").innerHTML="Number of Adults: " + adultsValue;

    var childrenValue = document.getElementById("children").value;
    document.getElementById("children-number").innerHTML="Number of Children: " + childrenValue;

    var classValue = document.getElementById("class-type").value;
    document.getElementById("class-value").innerHTML="Class Type: " + classValue;

    var startLocation = document.getElementById("from").value;
    document.getElementById("start-location").innerHTML="From: " + startLocation;
    
    var endLocation = document.getElementById("to").value;
    document.getElementById("end-location").innerHTML="To: " + endLocation;

    var startDate = document.getElementById("start-date").value;
    document.getElementById("start").innerHTML="Start Date: " + startDate;

    var endDate = document.getElementById("end-date").value;
    document.getElementById("end").innerHTML="End Date " + endDate;

    document.getElementById("price").innerHTML="Price:N/A";
        
}

function displayAlert(){
    alert("Your flight has been selected!");
}

