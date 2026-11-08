import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マリル"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	dexId: [183],
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "脂が 詰まっている 尻尾が 浮き袋の 代わりと なるので 流れの 速い 川も 平気。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "ころがりタックル"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card