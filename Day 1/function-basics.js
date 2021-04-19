function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
} 

// одинаково

function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}

function min (a,b){
	if(a >= b) {
		return b;
	}else{
		return a;
	}
}

function pow(x,n){
	return x ** n;
}