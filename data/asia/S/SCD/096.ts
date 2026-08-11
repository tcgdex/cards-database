import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拖出"
		},

		effect: {
			'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card