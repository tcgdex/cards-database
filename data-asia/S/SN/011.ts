import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "捲捲的體毛彈性十足。就算從懸崖上掉下去， 也不會受傷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滾滾滾動"
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
	regulationMark: "F"
}

export default card