import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "總是餓著肚子。會吃掉裝在像口袋一樣的袋子裡的種子來發電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "傷口撒鹽"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加50點傷害。"
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
