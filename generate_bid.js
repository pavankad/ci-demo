function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {

    // Use the Wasm function for secure bid computation
    const bidValue = computeBid();
    //const bidValue = 30;

    return {
       ad: {
      renderUrl: "https://example.com/ad",
      metadata: { category: "new_test" },
      bidSignals: JSON.stringify(trustedBiddingSignals)
    },
    bid: bidValue,
    render: "https://example.com/ad"
  };
}
