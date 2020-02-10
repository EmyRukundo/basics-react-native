let ws = new WebSocket('ws://host.com/path');

ws.onopen= () => {
    //connection opened
    ws.send('something'); // send a message
};

ws.onmessag = (e) => {
    // a message was received
    console.log(e.data);
};

ws.onerror = (e) => {
    // an error ocured
    console.log(e.message);
}

ws.onclose = (e) => {
    //connection closed
    console.log(e.code, e.reason);
}