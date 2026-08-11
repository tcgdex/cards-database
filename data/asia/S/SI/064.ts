import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔蟻獸"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "舔舔燃燒"
		},

		effect: {
			'zh-tw': "擲2次硬幣，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card