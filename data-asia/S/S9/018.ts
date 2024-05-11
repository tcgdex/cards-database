import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰鳥"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "每當牠拍動翅膀，羽毛就會閃爍出美麗的赤紅火焰。 是傳說的鳥寶可夢之一。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "烈火之翼"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加70點傷害。這個招式的傷害不計算弱點。"
		},

		damage: "20+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card