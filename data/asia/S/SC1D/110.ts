import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏賊王V"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "拖出"
		},

		effect: {
			'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。"
		},

		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "腦力震動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
