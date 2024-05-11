import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷伊布"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'zh-tw': "當雷伊布生氣或是吃驚時，牠全身的體毛會像針一樣豎起來刺穿對手。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "迅雷覺醒"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【水】寶可夢的特性全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雷電球"
		},

		damage: 90,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card