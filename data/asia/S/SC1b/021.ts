import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪咚猴"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "越是能用２根木棒敲奏出激烈節拍的啪咚猴，越是能獲得夥伴們的尊敬。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挑釁"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "二連擊"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×60點傷害。"
		},

		damage: "60×",
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
