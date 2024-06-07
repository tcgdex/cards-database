import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 70,
		cost: ["Fighting", "Metal"]
	}, {
		name: {
			'zh-tw': "廣域破壞"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。"
		},

		damage: 140,
		cost: ["Fighting", "Metal", "Metal"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card