import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛管侍"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有高度智能的寶可夢，能透過夥伴間角與角的互碰來彼此交換訊息。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "清新時間"
		},

		effect: {
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "幻象光線"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "D"
}

export default card