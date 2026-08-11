import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "引夢貘人"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了幫助那些晚上失眠的人，也有些引夢貘人會到醫院去協助醫生。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "催眠術"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "喚醒巴掌"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加90點傷害。然後，將對手的戰鬥寶可夢的特殊狀態全部恢復。"
		},

		damage: "30+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card