import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪咚猴"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "越是能用２根木棒敲奏出激烈節拍的啪咚猴，越是能獲得夥伴們的尊敬。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "50+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
