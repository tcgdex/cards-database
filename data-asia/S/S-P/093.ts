import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "雙倍奉還"
		},

		effect: {
			'zh-tw': "增加與在上個對手的回合這隻寶可夢受到的招式的傷害點相同數量的傷害。"
		},

		damage: "20+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "音速直擊"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card