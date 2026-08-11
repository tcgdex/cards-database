import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨狂擂亂打"
		},

		effect: {
			'zh-tw': "對手的2隻備戰寶可夢也各受到40點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 180,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card