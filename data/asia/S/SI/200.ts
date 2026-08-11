import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "提布莉姆"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "螺旋吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card