import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太陽岩"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "當牠旋轉自己的身體時，會發出太陽般的光芒，讓敵人的眼睛暫時失明。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "抵抗遮蔽"
		},

		effect: {
			'zh-tw': "若自己的場上有「月石」，則對手的所有寶可夢的抵抗力全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "落石"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
