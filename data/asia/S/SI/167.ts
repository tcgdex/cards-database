import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶石海星"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "釋放強烈的精神力量時，被稱為核心的器官就會 閃爍七彩光芒。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "力量寶石"
		},

		damage: 60,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card