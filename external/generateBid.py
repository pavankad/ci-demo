import json

def generate_bid(interest_group, auction_signals, per_buyer_signals, trusted_bidding_signals, browser_signals):
    return {
        "ad": {
            "renderUrl": "https://example.com/ad",
            "metadata": {"category": "test"},
            "bidSignals": json.dumps(trusted_bidding_signals)
        },
        "bid": 0.5,
        "render": "https://example.com/ad"
    }
