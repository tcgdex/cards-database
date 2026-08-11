import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怨影娃娃"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "不要去跟那些在黃昏時有怨影娃娃在排隊的人家來往。這是自古流傳下來的諺語。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鬼火"
		},

		damage: 20,
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