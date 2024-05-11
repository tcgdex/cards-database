import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥泥鰍"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "身體滑溜溜的很難抓住。某個地區流傳著泥泥鰍是由泥土凝結而成的說法。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鰭快刀"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card