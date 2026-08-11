import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "變澀蜥"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "很有戰略頭腦，會把手掌分泌出的水分做成水彈攻擊敵人。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "潑水"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
