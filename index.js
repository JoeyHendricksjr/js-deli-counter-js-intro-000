function takeANumber(currLine, newCustName) {
	katzDeliLine.push(newCustName);
	if(katzDeliLine.length === 0){
		return `Welcome, ${newCustName}. You are number 1 in line.`;
	} else if( katzDeliLine.length !==0){
		return `Welcome ${newCustName}. You are number ${katzDeliLine.length} in line.`;
	}
}
