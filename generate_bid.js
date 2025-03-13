function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {

    let bidValue = 30;
    let wasmInstance;
    if (!globalWasmHelper) {
           bidValue = -1;
    }else if(!(wasmInstance = new WebAssembly.Instance(globalWasmHelper, {}))){
           bidValue = -2;
    }else if (!(wasmInstance.exports.computeBid)) {
            bidValue = -3;
    }else {
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

