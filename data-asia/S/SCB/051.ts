import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "倫琴貓的透視能力在發現危險事物時非常有幫助。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "電氣舞步"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到40點傷害。將這隻寶可夢與備戰寶可夢互換。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "傷疤律動"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。"
		},

		damage: "100+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card