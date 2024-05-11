import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・蝶蝶"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "被稱為守護神，卻同時有著天真無邪與殘酷的性格，可說是大自然的化身。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "能量爆炸"
		},

		effect: {
			'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "螺旋吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card