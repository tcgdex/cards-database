import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "吸取拳"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "戰鼓猛攻"
		},

		damage: 160,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card