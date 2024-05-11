import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電蜘蛛"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'zh-tw': "發射腹部帶電的毛來攻擊。要是被牠的毛刺中，就會全身麻痺三天三夜。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝擊波"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 60,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
