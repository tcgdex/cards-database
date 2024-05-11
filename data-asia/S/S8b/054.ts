import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉V"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "十字拳"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若這隻寶可夢以外的「連擊」寶可夢使用了招式，則對手的1隻備戰寶可夢也受到160點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 100,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card