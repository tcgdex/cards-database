import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然人們容易被牠美麗的毛皮和姿態所迷惑，但牠其實是一種善變而凶暴的寶可夢。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "柔軟"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會【麻痺】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "利爪揮砍"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
