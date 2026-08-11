import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "佇立在大草原上，每天眺望著日升日落。擅長強而有力的踢技。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "狂野衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
