import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甲賀忍蛙V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "水漂"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "手裏劍亂舞"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card