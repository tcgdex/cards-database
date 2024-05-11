import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花岩怪"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "１０８個靈魂聚集在一起成為了寶可夢，但其中 似乎混進了壞心眼的靈魂。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "牢記恐懼"
		},

		effect: {
			'zh-tw': "在下個自己的回合結束前，受到這個招式的寶可夢弱點改爲【惡】屬性。[弱點以「×2」計算傷害。]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "詛咒水滴"
		},

		effect: {
			'zh-tw': "將2個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card