function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    const bidValue = 30;
    if (Module._computeBid) {
        let bidValue = Module._computeBid();
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
