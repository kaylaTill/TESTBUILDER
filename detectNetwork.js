// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function (cardNumber) {
  if (cardNumber === null || cardNumber === undefined) {
    return "null";
  }
  var prefix1 = cardNumber.substring(0, 1);
  var prefix2 = cardNumber.substring(0, 2);
  var prefix3 = cardNumber.substring(0, 3);
  var prefix4 = cardNumber.substring(0, 4);
  var prefix6 = cardNumber.substring(0, 6);
  var len = cardNumber.length;
  
  if ((prefix2 === "38" || prefix2 === "39") && len === 14) {
    return "Diner\'s Club";
  }
  if ((prefix2 === "34" || prefix2 === "37") && len === 15) {
    return "American Express";
  }
  if (parseInt(prefix2) >= 51 && parseInt(prefix2) <= 55 && len === 16) {
    return "MasterCard";
  }

  if ((prefix4 === "4903" || prefix4 === "4905" || prefix4 === "4911" || prefix4 === "4936" ||
  prefix6 === "564182" || prefix6 === "633110" || prefix4 === "6333" || prefix4 === "6759") &&
  (len === 16 || len === 18 || len === 19)) {
    return "Switch";
  } else if (prefix1 === "4" && (len === 13 || len === 16 || len === 19)) {
    return "Visa";
  }

  if ((prefix4 === "5018" || prefix4 === "5020" || prefix4 === "5038" || prefix4 === "6304") &&
  (len >= 12 && len <= 19)) {
    return "Maestro";
  }
  if (((parseInt(prefix6) >= 622126 && parseInt(prefix6) <= 622925) ||
  (parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626) ||
  (parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288)) && (len >= 16 && len <= 19)) {
    return "China UnionPay";
  }else if ((prefix4 === "6011" || (parseInt(prefix3) >= 644 && parseInt(prefix3) <= 649) ||
  prefix2 === "65") && (len === 16 || len === 19)) {
    return "Discover";
  } else {
    return "Invalid card number!";
  }
};

// function range(start, end) {
//   var array = [];
//   var numStart = parseInt(start);
//   var numEnd = parseInt(end);

//   for (var i = numStart; i <= numEnd; i += 1) {
//     array.push(i.toString());
//   }

//   return array;
// };



//   var length = cardNumber.length;
//   var networks = {};
//   networks["Diner's Club"] = ["38", "39"];
//   networks["American Express"] = ["34", "37"];
//   networks["Visa"] = ["4"];
//   networks["MasterCard"] = ["51", "52", "53", "54", "55"];
//   networks["Discover"] = ["65", "6011", "644", "645", "646", "647", "648", "649"];
//   networks["Maestro"] = ["5018", "5020", "5038", "6304"];
//   networks["China Union Pay"] = [range("622126", "622925"), "624", "625", "626", range("6282", "6288")].flat(2);
//   networks["Switch"] = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"];

//   var lengths = {}
//   lengths["Diner's Club"] = [14];
//   lengths["American Express"] = [15];
//   lengths["Visa"] = [16, 19, 13];
//   lengths["MasterCard"] = [16];
//   lengths["Discover"] = [16, 19];
//   lengths["Maestro"] = [12, 13, 14, 15, 16, 17, 18, 19];
//   lengths["China Union Pay"] = [16, 17, 18, 19];
//   lengths["Switch"] = [16, 18, 19];

//   for (var network in networks) {
//     var prefix = networks[network];
//     var switchPrefix = cardNumber.slice(0, 4);
//     var chinaUnionPrefix = cardNumber.slice(0,5);

//     if (cardNumber[0] === 4 && networks["Switch"].indexOf(switchPrefix) > -1) {
//       return "Switch";
//     } else if ((cardNumber[0] === 4 && networks["Switch"].indexOf(switchPrefix) < -1) && (lengths["Visa"].indexOf(length) > -1)) {
//       return "Visa";
//     } else if (networks["China Union Pay"].indexOf(chinaUnionPrefix) > -1 && lengths["China Union Pay"] ){
//       return "China Union Pay";
//     } else {
//       for (var i = 0; i < prefix.length; i += 1) {
//         if (cardNumber.startsWith(prefix[i])) {
//           var provider = network;
//         }
//         if (cardNumber.startsWith(prefix[i]) && lengths[provider].indexOf(length) > -1) {
//           return provider;
//         }
//       }
//     }
//   }



