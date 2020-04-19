function takeANumber(currLine, newCustName) {
	currLine.push(newCustName);
	if(currLine.length === 0){
		return `Welcome, ${newCustName}. You are number 1 in line.`;
	} else if( currLine.length !==0){
		return `Welcome ${newCustName}. You are number ${currLine.length} in line.`;
	}
}
