import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快拳郎"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "使出的拳擊能劈開空氣。出拳的速度極為迅速，即便只是擦過都會造成灼傷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "聯合擊"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「飛腿郎」，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "音速直擊"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card