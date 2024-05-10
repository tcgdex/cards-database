import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ルクシオ",
		'zh-tw': "勒克貓"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [404],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 敵を 気絶させる。",
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到， 就能讓敵人暈厥。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "エレキック",
			'zh-tw': "電氣踢"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card