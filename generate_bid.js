async function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {

    // Use the Wasm function for secure bid computation
    const bidValue = computeBid();
    //const bidValue = 30;

    return {
        ad: interestGroup.ads[0],  // Choose the first ad from the interest group
        bid: bidValue,
        render: interestGroup.ads[0].renderURL,
    };
}
