module.exports = function check(str, bracketsConfig) {
  // My solution Sergei Karpovich
  let count1 = 0, count2 = 0;
  for (let i = 0; i <= bracketsConfig.length-1; i++) {
  	for (let j = 0; j <= str.length-1; j++) {
  		if (str[j] === bracketsConfig[i][0]) {
  			count1 +=1;
  		}
  		if (str[j] === bracketsConfig[i][1]) {
  			count2 +=1;
  		}
  	}
  }
  if (count1!==count2) {
  	return false;
  }
  else{
  	return true;
  }
}
