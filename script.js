const bc = new BroadcastChannel('psh');

    bc.onmessage = function(event) {
        alert(event.data);
};

 function sendMessage() {
      bc.postMessage('Your Text or Json(data)');
 }
