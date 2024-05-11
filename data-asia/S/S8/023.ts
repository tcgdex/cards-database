import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "珍珠貝"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "珍珠貝的珍珠非常貴重，據說價值是大舌貝所產珍珠的１０倍以上。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "泡沫濺射"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card