import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨金怪V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

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
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card