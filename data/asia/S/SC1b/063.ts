import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 魔牆人偶"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "擅長踢踏舞。會用冷氣製造出冰之地板並將其踢起，以此作為保護自己的障壁。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰凍之風"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "三重旋轉"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
