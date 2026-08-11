import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千面避役V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "衝浪"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "水子彈"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
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