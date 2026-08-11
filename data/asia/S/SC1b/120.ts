import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡比獸VMAX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨自由墜落"
		},

		effect: {
			'zh-tw': "增加自己的備戰寶可夢的數量×30點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
