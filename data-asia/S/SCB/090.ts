import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒骷蛙"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "一躍而起接近敵人，用有毒的爪子狠抓對方！光是擦傷就能將對手ＫＯ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "加強毒性"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢因【中毒】而放置的傷害指示物的數量增加2個。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "毒之爪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card