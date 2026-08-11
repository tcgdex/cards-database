import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電蜘蛛"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "發射腹部帶電的毛來攻擊。要是被牠的毛刺中，就會全身麻痺三天三夜。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "麻痺針"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "追打衝擊"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×20點傷害。"
		},

		damage: "20×",
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
