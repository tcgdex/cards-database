import { Card } from "../../../interfaces"
import Set from "../SVP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布撥"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'zh-tw': "手的肉球是放電的器官。 會費勁地用後腳站起來， 然後從手掌釋放出電擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小衝擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card