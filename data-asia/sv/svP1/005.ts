import { Card } from "../../../interfaces"
import Set from "../svP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巴布土撥ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "電氣踢"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "閃電強襲"
		},

		effect: {
			'zh-tw': "將2個這隻寶可夢身上附加的【雷】能量丟棄，對手的1隻寶可夢受到220點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card