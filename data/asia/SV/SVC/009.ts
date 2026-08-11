import { Card } from "../../../interfaces"
import Set from "../SVC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巴布土撥"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "雖然平時動作慢吞吞的，但在逼不得已要面對戰鬥時，會用迅雷不及掩耳的身手擊潰敵人。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "音速伏特"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電氣拳"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 100,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card