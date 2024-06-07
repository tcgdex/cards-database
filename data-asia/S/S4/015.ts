import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蝸牛"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "身體總是不斷起伏著，像熔岩一樣灼熱。會不時從殼裡冒出火花。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 60,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "紅蓮火焰"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card