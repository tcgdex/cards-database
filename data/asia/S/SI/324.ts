import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老翁龍"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推擊"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "怒火沖天"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加90點傷害。"
		},

		damage: "70+",
		cost: ["Water", "Fighting"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card