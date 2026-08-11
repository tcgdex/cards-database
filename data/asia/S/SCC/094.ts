import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙螺蟒V"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "沙之壁"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "大地粉碎"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card