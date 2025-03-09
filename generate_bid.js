async function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    // Load the Wasm helper inside the TEE
    const response = await fetch(interestGroup.biddingWasmHelperURL);
    const buffer = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(buffer);

    // Use the Wasm function for secure bid computation
    const bidValue = instance.exports.computeBid();

    return {
        ad: interestGroup.ads[0],  // Choose the first ad from the interest group
        bid: bidValue,
        render: interestGroup.ads[0].renderURL,
    };
}
