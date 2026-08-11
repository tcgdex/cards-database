import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "功夫鼬"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "與群體的夥伴們一起在深山裡閉關修行。不同的群體有著不同的踢腿和手刀技法。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連撞"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card