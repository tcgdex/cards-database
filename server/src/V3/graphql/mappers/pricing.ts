function mapCardMarketPricing(pricing: any) {
	if (!pricing) return null;
	const { updated, unit, idProduct, avg, low, trend, avg1, avg7, avg30, ...holos } = pricing;
	return {
		updated,
		unit,
		idProduct,
		avg,
		low,
		trend,
		avg1,
		avg7,
		avg30,
		avgHolo: holos['avg-holo'],
		lowHolo: holos['low-holo'],
		trendHolo: holos['trend-holo'],
		avg1Holo: holos['avg1-holo'],
		avg7Holo: holos['avg7-holo'],
		avg30Holo: holos['avg30-holo'],
	}
}

function mapTcgplayerPricing(pricing: any) {
	if (!pricing) return null;
	const { updated, unit, ...variants } = pricing;
	return {
		updated,
		unit,
		prices: Object.entries(variants).map(([name, value]: [string, any]) => ({
			name,
			productId: value.productId,
			lowPrice: value.lowPrice,
			midPrice: value.midPrice,
			highPrice: value.highPrice,
			marketPrice: value.marketPrice,
			directLowPrice: value.directLowPrice,
		})),
	};
}

export { mapCardMarketPricing, mapTcgplayerPricing };
