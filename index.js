// code your solution here
const result = record.find(function(superbowlRecord) {
    if ( record.result === "W"){
        return !!result ? result.year : undefined
    }

}
)





function superbowlWin(record){

    const result = record.find( record => record.result === "W" )
    return !!result ? result.year : undefined
   }
   
