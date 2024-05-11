import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "喵喵VMAX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨特大金幣"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card