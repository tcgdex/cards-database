import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謝米V"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "羽擊"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "復仇暴擊"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×40點傷害。"
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card