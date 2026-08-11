import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆火駝"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "體內儲存著１２００度的熔岩。使用火屬性的招式後，駝峰就會縮小。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "踩踏"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加50點傷害。"
		},

		damage: "50+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card