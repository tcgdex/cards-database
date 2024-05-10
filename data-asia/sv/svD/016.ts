import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈火幽靈"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "偽裝成燈的樣子藏身在城鎮裡。一旦發現了臨近死期的人， 便會悄悄地跟在後面。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "誘導火球"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。"
		},

		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card