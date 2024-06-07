import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海豹球"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "身體被蓬鬆的體毛覆蓋著，因此即使在冰上翻滾也不會覺得冷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "子彈拳"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×20點傷害。"
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "同步之錘"
		},

		effect: {
			'zh-tw': "若這隻寶可夢與對手的戰鬥寶可夢，身上附加的能量數量相同，則增加90點傷害。"
		},

		damage: "60+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card