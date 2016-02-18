/* Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as arrays ↴ of integers [start_time, end_time].
These integers represent the number of 30-minute blocks past 9:00am. */

var m =  [ [1, 3],[7, 9], [2, 6], [3, 5] ];
function mergeRanges(meetings){

//sort by start times

    var sortedMeetings = meetings.sort(function(a,b){

            
                return a[0]-b[0];
         

        });
  
    // meetings only go in mergedMeetings when we're sure they can't be merged further
    var mergedMeetings = [];

    var previousMeetingStart = sortedMeetings[0][0];
    var previousMeetingEnd= sortedMeetings[0][1];
   
   
   /*slice(star,upToButNotEnd) (slice method) if omitted end, it will shallow copied the entire array starting
   at provided index */
    sortedMeetings.slice(1).forEach(function(currentMeeting){
        
        //sorted Meeeting is a 2 dim array or array of arrays
        //for EACH WILL ITERATE ON EACH array pair 

        var currentMeetingStart = currentMeeting[0];
          var currentMeetingEnd = currentMeeting[1];

     //making sure we got what we need.      
    // console.log("currentMeetingStart & currentMeeting =",currentMeetingStart, currentMeetingEnd)
   
        //  if the previous meeting can be merged with the current one
        //  that is, if current meeting starts before  or at the same time to previous meeting ends
        //  then will set the previous Meeting ending time to whatever is larger 
        // the currentMeeting ending time or the previous meetting ending time
        if (currentMeetingStart <= previousMeetingEnd){
            

            //  merge the currentMeeting back into the previousMeeting
            //  and keep the resulting meeting as the previousMeeting
            //  because this newly-merged meeting might still
            //  need to be merged with the next meeting
            previousMeetingEnd= Math.max(currentMeetingEnd, previousMeetingEnd)
}
        //  else the previous meeting can't be merged with anything else
        else{

            //  put it in mergedMeetings
            //  and move on to trying to merge the current meeting into subsequent meetings
            console.log("previousMeetingStart, previousMeetingEnd", previousMeetingStart, previousMeetingEnd);
            mergedMeetings.push([previousMeetingStart, previousMeetingEnd])
            console.log("mergedMeetings", mergedMeetings);
            previousMeetingStart = currentMeetingStart;
            previousMeetingEnd= currentMeetingEnd;
              
        }
    });

    //  put last meeting we were trying to merge in our final set
    //this is done to make sure the verylast  pair gets added to the array of meeting
    mergedMeetings.push([previousMeetingStart, previousMeetingEnd])

    return mergedMeetings;
}


mergeRanges(m);