import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水伊布VMAX"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "泡沫艙"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【水】寶可夢卡，放置於備戰區。然後，從自己的棄牌區選擇最多3張【水】能量卡，附於剛放置的寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極巨激流"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。"
		},

		damage: "100+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card