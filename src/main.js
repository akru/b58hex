const bs58 = require('bs58');

document.getElementById('request').onchange = () => {
    const base58 = bs58.encode(new Buffer(document.getElementById('request').value.replace("0x", ""), 'hex'));
    document.getElementById('result').value = base58;
};
