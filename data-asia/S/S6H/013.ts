import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火炎獅"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "能吐出攝氏６０００度的氣息，但不會用在獵物身上，因為牠比較喜歡吃生肉。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "打擊"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "雙重金勾臂"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card