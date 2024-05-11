import { Card } from "../../../interfaces"
import Set from "../SDP"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化 可能性的特殊寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續舞步"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card