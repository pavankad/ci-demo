function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    
    let bidValue = 30;
    if (!globalWasmHelper) {
           bidValue = -1;
    }else {
    const wasmInstance = new WebAssembly.Instance(globalWasmHelper, {});    
    if (wasmInstance.exports.computeBid) {
        bidValue = wasmInstance.exports.computeBid();
        console.log("Bid Value from Wasm:", bidValue);
    }
    return {
    ad: {
      renderUrl: "https://example.com/ad",
      metadata: { category: "test" },
      bidSignals: JSON.stringify(trustedBiddingSignals),
      browserSignals: JSON.stringify(browserSignals)
    },
    bid: bidValue,
    render: "https://example.com/ad"
  };
}

