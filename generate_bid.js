function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    let bidValue = 30;
    if (typeof Module !== "undefined"){
        bidValue = -1;
    }else if(Module._computeBid) {
        bidValue = -2;
    }else{
        bidValue = Module._computeBid(); // Call Wasm function
    } 
    return {
    ad: {
      renderUrl: "https://example.com/ad",
      metadata: { category: "test" },
      bidSignals: JSON.stringify(trustedBiddingSignals)
    },
    bid: bidValue,
    render: "https://example.com/ad"
  };
}
