function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals, wasmHelper) {
    let bidValue = 30;
    // Check if wasmHelper is available and has computeBid function
    if (!wasmHelper){
        bidValue = -1;
    }else if(!wasmHelper.computeBid) {
        bidValue = -2;
    }else
        bidValue = wasmHelper.computeBid(); // Call Wasm function
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
