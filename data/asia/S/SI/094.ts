import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沼躍魚"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "擲泥"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "能量閉環"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card