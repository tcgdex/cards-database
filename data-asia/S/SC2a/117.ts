import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛巨魔V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "尖矛肘擊"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的【惡】能量，放回手牌。"
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
