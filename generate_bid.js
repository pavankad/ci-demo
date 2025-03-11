function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    const bidValue = 30;
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
