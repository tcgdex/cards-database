import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美納斯V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "水流衝擊"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。"
		},

		damage: "10+",
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "昏睡飛濺"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
