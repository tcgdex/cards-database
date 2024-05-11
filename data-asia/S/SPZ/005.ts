import { Card } from "../../../interfaces"
import Set from "../SPZ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉V"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "閃電伏特"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 190,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card