let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeetings: function(num){
        this.meetings = this.meetings + num;
    },

    meetingDone: function(num1){
        this.meetDone = this.meetDone - num1;
    },

    resetDay : function(){
        this.meetings = 0;
        this.meetDone = 0;
    },

    summery: function(){
        return `You have ${this.meetings + this.meetDone} meetings Today!`;
    },
};

myTodos.addMeetings(4);
myTodos.addMeetings(5);
myTodos.meetingDone(5);

console.log(myTodos.summery());
