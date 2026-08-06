import { Card } from "../../../interfaces"
import Set from "../SC1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可VMAX"
	},

	dexId: [877],
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨放電"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card