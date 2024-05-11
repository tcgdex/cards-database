import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大針蜂V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "雙針"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "群起刺擊"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢，受到自己的場上「大針蜂【V】」的數量×50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card