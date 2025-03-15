async function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
           var bid = 0;
      if(!globalWasmHex){
            bid = -1;
      }
      var val = WebAssembly.instantiate(globalWasmHex)
                .then(results => {
        const Sum = results.instance.exports.Sum;
        val3 = Sum(2,3);
        return val3;
      });
      bid = await val;
      return {
          ad: {
            renderUrl: "https://example.com/ad",
            metadata: { category: "new_test" },
            bidSignals: JSON.stringify(trustedBiddingSignals)
          },
          bid: bid,
          render: "https://example.com/ad"
        };
 }
