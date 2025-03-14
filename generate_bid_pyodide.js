async function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
      var bid = 0;
      
      const importObject = {
            module: {},
            env: {
              memory: new WebAssembly.Memory({ initial: 256 }),
            }
       };
      var val = fetch('sum.wasm').then(response =>
        response.arrayBuffer()
      ).then(bytes =>
        WebAssembly.instantiate(bytes, importObject)
      ).then(results => {
        const Sum = results.instance.exports.Sum;
        val3 = Sum(2,3);
        return val3;
      });
      bid  = await val;
      return {
          ad: {
            renderUrl: "https://example.com/ad",
            metadata: { category: "new_test" },
            bidSignals: JSON.stringify(trustedBiddingSignals)
          },
          bid: 10,
          render: "https://example.com/ad"
        };
}
