import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カルボウ"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	dexId: [935],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "戦いになると 火力が 上がり 摂氏１０００度に 達する。 油分の多い 木の実を 好む。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "おにび"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card