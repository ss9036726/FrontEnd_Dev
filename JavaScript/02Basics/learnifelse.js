var whoIsHere = 'user'

if (whoIsHere === 'user') {
    console.log('Greetings message for user')
    console.log('Give access to view all his cources')
} else if (whoIsHere === 'teacher') {
    console.log('Greetings message for teachers')
    console.log('Give access to his course')
} else {
    console.log('Message : Please verify your email')
    console.log('Send user an email for verification')
}