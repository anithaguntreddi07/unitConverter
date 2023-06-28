function convert() {
  var inputValue = document.getElementById("inputValue").value;
  var unitFrom = document.getElementById("unitFrom").value;
  var unitTo = document.getElementById("unitTo").value;
  var result;

  
  if (unitFrom === "cm" && unitTo === "m") {
    result = inputValue / 100; 
  } else if (unitFrom === "cm" && unitTo === "km") {
    result = inputValue / 100000; 
  } else if (unitFrom === "cm" && unitTo === "inch") {
    result = inputValue / 2.54; 
  } else if (unitFrom === "cm" && unitTo === "ft") {
    result = inputValue / 30.48;  
  } else if (unitFrom === "cm" && unitTo === "yard") {
    result = inputValue / 91.44; 
  } else if (unitFrom === "cm" && unitTo === "mile") {
    result = inputValue / 160934.4;
  } else if (unitFrom === "cm" && unitTo === "nauticalMile") {
    result = inputValue / 185200; 
  } else if (unitFrom === "m" && unitTo === "cm") {
    result = inputValue * 100; 
  } else if (unitFrom === "m" && unitTo === "km") {
    result = inputValue / 1000; 
  } else if (unitFrom === "m" && unitTo === "inch") {
    result = inputValue * 39.37; 
  } else if (unitFrom === "m" && unitTo === "ft") {
    result = inputValue * 3.281; 
  } else if (unitFrom === "m" && unitTo === "yard") {
    result = inputValue * 1.094; 
  } else if (unitFrom === "m" && unitTo === "mile") {
    result = inputValue / 1609.344; 
  } else if (unitFrom === "m" && unitTo === "nauticalMile") {
    result = inputValue / 1852;
  } else if (unitFrom === "km" && unitTo === "cm") {
    result = inputValue * 100000; 
  } else if (unitFrom === "km" && unitTo === "m") {
    result = inputValue * 1000; 
  } else if (unitFrom === "km" && unitTo === "inch") {
    result = inputValue * 39370.079; 
  } else if (unitFrom === "km" && unitTo === "ft") {
    result = inputValue * 3280.84; 
  } else if (unitFrom === "km" && unitTo === "yard") {
    result = inputValue * 1093.613; 
  } else if (unitFrom === "km" && unitTo === "mile") {
    result = inputValue / 1.609; 
  } else if (unitFrom === "km" && unitTo === "nauticalMile") {
    result = inputValue / 1.852; 
  } else if (unitFrom === "inch" && unitTo === "cm") {
    result = inputValue * 2.54; 
  } else if (unitFrom === "inch" && unitTo === "m") {
    result = inputValue / 39.37;
  } else if (unitFrom === "inch" && unitTo === "km") {
    result = inputValue / 39370.079;
  } else if (unitFrom === "inch" && unitTo === "ft") {
    result = inputValue / 12;
  } else if (unitFrom === "inch" && unitTo === "yard") {
    result = inputValue / 36; 
  } else if (unitFrom === "inch" && unitTo === "mile") {
    result = inputValue / 63360; 
  } else if (unitFrom === "inch" && unitTo === "nauticalMile") {
    result = inputValue / 72913.386;
  } else if (unitFrom === "ft" && unitTo === "cm") {
    result = inputValue * 30.48;
  } else if (unitFrom === "ft" && unitTo === "m") {
    result = inputValue / 3.281; 
  } else if (unitFrom === "ft" && unitTo === "km") {
    result = inputValue / 3280.84;
  } else if (unitFrom === "ft" && unitTo === "inch") {
    result = inputValue * 12; 
  } else if (unitFrom === "ft" && unitTo === "yard") {
    result = inputValue / 3; 
  } else if (unitFrom === "ft" && unitTo === "mile") {
    result = inputValue / 5280; 
  } else if (unitFrom === "ft" && unitTo === "nauticalMile") {
    result = inputValue / 6076.115;
  } else if (unitFrom === "yard" && unitTo === "cm") {
    result = inputValue * 91.44; 
  } else if (unitFrom === "yard" && unitTo === "m") {
    result = inputValue / 1.094;
  } else if (unitFrom === "yard" && unitTo === "km") {
    result = inputValue / 1093.613; 
  } else if (unitFrom === "yard" && unitTo === "inch") {
    result = inputValue * 36; 
  } else if (unitFrom === "yard" && unitTo === "ft") {
    result = inputValue * 3; 
  } else if (unitFrom === "yard" && unitTo === "mile") {
    result = inputValue / 1760; 
  } else if (unitFrom === "yard" && unitTo === "nauticalMile") {
    result = inputValue / 2025.372; 
  } else if (unitFrom === "mile" && unitTo === "cm") {
    result = inputValue * 160934.4; 
  } else if (unitFrom === "mile" && unitTo === "m") {
    result = inputValue * 1609.344; 
  } else if (unitFrom === "mile" && unitTo === "km") {
    result = inputValue * 1.609; 
  } else if (unitFrom === "mile" && unitTo === "inch") {
    result = inputValue * 63360; 
  } else if (unitFrom === "mile" && unitTo === "ft") {
    result = inputValue * 5280; 
  } else if (unitFrom === "mile" && unitTo === "yard") {
    result = inputValue * 1760;  
  } else if (unitFrom === "mile" && unitTo === "nauticalMile") {
    result = inputValue / 1.151; 
  } else if (unitFrom === "nauticalMile" && unitTo === "cm") {
    result = inputValue * 185200; 
  } else if (unitFrom === "nauticalMile" && unitTo === "m") {
    result = inputValue * 1852;
  } else if (unitFrom === "nauticalMile" && unitTo === "km") {
    result = inputValue * 1.852; 
  } else if (unitFrom === "nauticalMile" && unitTo === "inch") {
    result = inputValue * 72913.386; 
  } else if (unitFrom === "nauticalMile" && unitTo === "ft") {
    result = inputValue * 6076.115; 
  } else if (unitFrom === "nauticalMile" && unitTo === "yard") {
    result = inputValue * 2025.372; 
  } else if (unitFrom === "nauticalMile" && unitTo === "mile") {
    result = inputValue * 1.151; 
  } else {
    result = inputValue;
  }

  
  document.getElementById("result").innerHTML = result.toFixed(2);
}
