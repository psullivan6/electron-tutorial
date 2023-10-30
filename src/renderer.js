const information = document.getElementById('info');
information.innerText = JSON.stringify(window.contextBridge, null, 2);

const pingButton = document.getElementById('pingButton');
const handleClick = async () => {
  const response = await window.contextBridge.ping();
  console.log('PING RESPONSE - electron:', response, '\nclient: ', new Date().toISOString());
};
pingButton.addEventListener('click', handleClick);
