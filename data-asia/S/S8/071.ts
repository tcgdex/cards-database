import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄坦"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "身體是融化成液狀的鋼鐵。能夠將地底的鐵或其他金屬溶解後吸收進體內。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鐵質攝取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "頭錘"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card