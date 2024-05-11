import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "尖牙籠"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會纏繞在生長於潮濕地帶的樹木上，以散發甜甜香氣的唾液吸引獵物靠近，再一口吃掉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "報恩"
		},

		effect: {
			'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿5張為止。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "終極吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
