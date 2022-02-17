module.exports = function toReadable (number) {
    
        const miniNums = ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine',' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen',' seventeen', ' eighteen', ' nineteen'];
        const maxNums = ['','',' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty',' ninety']; 
        const weaving = ' hundred';
    
         if(number === 0){
            return 'zero'
        } else if ( number < 20 ){
            return miniNums[number].substring(1) 
        } else if ( number < 100) {
            return maxNums[parseInt(number.toString()[0])].substring(1)  + miniNums[parseInt(number.toString()[1])]
        } else if ( number > 100 && parseInt(number.toString().substring(1)) < 20) {
            return  miniNums[parseInt(number.toString()[0])].substring(1) + weaving + miniNums[parseInt(number.toString().substring(1))]
        } else {
            return  miniNums[parseInt(number.toString()[0])].substring(1) + weaving + maxNums[parseInt(number.toString()[1])] + miniNums[parseInt(number.toString()[2])]
        }
    
}
