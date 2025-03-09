async function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    // Load the Wasm helper inside the TEE
    const response = await fetch("https://depatraining.blob.core.windows.net/wasm-code/helper.wasm?sp=r&st=2025-03-09T16:18:26Z&se=2025-05-31T00:18:26Z&spr=https&sv=2022-11-02&sr=b&sig=iIphKMPL2u%2Bt6THxDKcN5dE7qA3TT3zLowhCzPuqqSY%3D");
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
