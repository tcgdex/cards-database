import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "レジスチル"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	dexId: [379],
	hp: 130,
	types: ["Metal"],

	description: {
		'ja-jp': "伸び縮みする 柔らかさも あるが どんな 金属よりも 頑丈な 不思議な 物質で できている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'ja-jp': "レイジングハンマー"
		},

		damage: "60＋",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	rarity: "None"
}

export default card