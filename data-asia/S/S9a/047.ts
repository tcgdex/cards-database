import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 千針魚"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "會用針散布毒素的棘手傢伙，因而受到漁民們的厭惡。棲息在其他地區 的千針魚則是呈現著不同的姿態。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尖刺猛攻"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×10點傷害。"
		},

		damage: "10×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card