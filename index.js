function takeANumber(currLine, newCustName) {
	currLine.push(newCustName);
	if(currLine.length === 0){
		return `Welcome, ${newCustName}. You are number 1 in line.`;
	} else if( currLine.length !==0){
		return `Welcome, ${newCustName}. You are number ${currLine.length} in line.`;
	}
}
function nowServing(arr){
	if(arr.length !== 0){
		let firstInLine = arr[0];
		arr.splice(0,1);
		return `Currently serving ${firstInLine}.`;
		// return arr;
	} else {
		return 'There is nobody waiting to be served!';
	}
}
