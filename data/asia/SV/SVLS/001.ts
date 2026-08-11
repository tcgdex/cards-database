import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ロコン"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "温かい ６本の 尻尾は 体が 育つごとに 毛並みが 良くなり 美しく なっていく。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "とっしん"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card