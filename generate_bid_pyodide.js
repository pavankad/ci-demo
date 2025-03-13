// run pyodide interactively in a web-worker
import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.27.3/full/pyodide.mjs";

async function hello_python() {
  let pyodide = await loadPyodide();
  return pyodide.runPythonAsync("1+1");
}

async function generateBids(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
  result = hello_python().then((result) => {
  console.log("Python says that 1+1 =", result);
  });
  return {
    ad: {
      renderUrl: "https://example.com/ad",
      metadata: { category: "new_test" },
      bidSignals: JSON.stringify(trustedBiddingSignals)
    },
    bid: result,
    render: "https://example.com/ad"
  };
}
