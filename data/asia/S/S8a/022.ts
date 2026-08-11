import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "衝浪皮卡丘VMAX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨衝浪"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 160,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card