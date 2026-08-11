import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朽木妖VMAX"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "遺失的森林"
		},

		effect: {
			'zh-tw': "造成對手的棄牌區的支援者卡的張數×40點傷害。"
		},

		damage: "40×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨樹木"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card