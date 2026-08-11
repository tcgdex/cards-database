import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "腕力"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "全身都是肌肉，雖然體型只有小孩那麼大，卻可以扔飛１００個大人。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢倒"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "連續擊拳"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。"
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card