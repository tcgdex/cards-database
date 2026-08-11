import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼炮臂蝦"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "狙擊"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "蟹鉗錘"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card