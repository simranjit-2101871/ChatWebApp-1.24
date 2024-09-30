const socket= io('http://localhost:8000');
const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messageContainer=document.querySelector('.container');


//appned fucntion 
/*const append=(message,postion)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    messageContainer.append(messageElement);
    
}*///error mde some changes

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);  // Correctly add left or right based on position
    messageContainer.append(messageElement);
};


const tommy=prompt("Enter your name, please");

socket.emit('user-joined',tommy);

// When a new user joins, display on the right (since it's your screen)
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');
});

// When receiving a message from someone else, display on the left
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

// When submitting your own message, display it on the right
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');  // Your message should appear on the right
    socket.emit('send', message);
    messageInput.value = '';  // Clear input after sending
});



//is someone leave the chat
socket.on('leave',tommy=>{
    append(`${data.tommy} left the chat`,'left')
})


//audio walla kam maine kiya naji abhi tak ,lets see it later