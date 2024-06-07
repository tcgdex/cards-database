import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角蟲"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "毒針非常厲害。鮮豔的體色是用來 警告對手的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突刺"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card