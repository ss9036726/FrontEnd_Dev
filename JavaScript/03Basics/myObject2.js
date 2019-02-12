let myYoutubeVideoOne = {
    title: 'Loops in JavaScript',
    videoLength: 15,
    videoDescription: 'This is a video description and a long one'
};

let myYoutubeVideoTwo = {
    title: 'function in JavaScript',
    videoLength: 10,
    videoDescription: 'This is a video description and a long one'
};

let changeVideolength = function(myObject){
    // console.log(`The length of the video is : ${myObject.videoLength}`);
    return {
        formatOne: `The length of the video is : ${myObject.videoLength + 2}`,
        formatTwo: `The length of the video is : ${myObject.videoLength + 1}`
    }
}

console.log(changeVideolength(myYoutubeVideoOne));

let addOne = changeVideolength(myYoutubeVideoOne);
let addTwo = changeVideolength(myYoutubeVideoTwo);

console.log(addOne.formatOne);
console.log(addOne.formatTwo);

console.log(addTwo.formatOne);
console.log(addTwo.formatTwo);
