import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・鳴鳴VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨衝擊"
		},

		effect: {
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card