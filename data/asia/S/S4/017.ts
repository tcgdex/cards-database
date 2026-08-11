import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水伊布"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "當水伊布開始微微顫動牠全身上下的鰭，就表示幾個小時之後要下雨了。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "激流覺醒"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【火】寶可夢的特性全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極光束"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card