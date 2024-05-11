import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗螳螂"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "巨大的鉗子重達體重的３分之１。鉗子一揮，就連岩石都能一擊粉碎。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "十字剪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "危險爪"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【基礎】寶可夢，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card