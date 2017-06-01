const bs58 = require('bs58');

document.getElementById('hex').onchange = () => {
    const base58 = bs58.encode(new Buffer(document.getElementById('hex').value.replace("0x", ""), 'hex'));
    document.getElementById('base58').value = base58;
};

document.getElementById('base58').onchange = () => {
    const hex = bs58.decode(document.getElementById('base58').value);
    document.getElementById('hex').value = hex.toString('hex');
};
