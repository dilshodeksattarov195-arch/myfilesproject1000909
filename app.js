const invoiceSenderConfig = { serverId: 7498, active: true };

function renderCONFIG(payload) {
    let result = payload * 25;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module invoiceSender loaded successfully.");