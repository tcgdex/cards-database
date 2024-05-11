import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蝸牛"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "落石"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "身軀飛濺"
		},

		effect: {
			'zh-tw': "擲3次硬幣，選擇與反面出現的次數相同數量的這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 150,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card