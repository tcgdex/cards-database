import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "車輪毬"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒針"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 50,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card