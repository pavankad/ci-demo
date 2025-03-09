function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
  return {
    ad: {
      renderUrl: "https://example.com/ad",
      metadata: { category: val },
      bidSignals: JSON.stringify(trustedBiddingSignals)
    },
    bid: 0.5,
    render: "https://example.com/ad"
  };
}

