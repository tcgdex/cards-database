import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鑽角犀獸"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "進化後變得只用後腳就能站立。如果被牠的角刺中，就連岩石也會被開出洞來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "角鑽"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "岩崩"
		},

		effect: {
			'zh-tw': "對手的2隻備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card