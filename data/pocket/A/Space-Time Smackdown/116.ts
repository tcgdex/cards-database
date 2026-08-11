import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'de-de': "Bronzel",
		'pt-br': "Bronzor",
		'ko-kr': "동미러"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [436],
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "Ancient people believed that the pattern on Bronzor's back contained a mysterious power.",
		'fr-fr': "On croyait autrefois que les motifs qui ornent\nson dos renfermaient une puissance mystique.",
		'es-es': "Antaño se creía que en el dibujo de su parte\nposterior residía una fuerza misteriosa.",
		'it-it': "Nell'antichità si credeva che una forza misteriosa\ndimorasse nei disegni sul dorso di Bronzor.",
		'de-de': "Früher glaubten die Menschen, dem Muster auf\nseinem Rücken wohne eine mysteriöse Kraft inne.",
		'pt-br': "Os povos antigos acreditavam que o padrão nas costas\nde Bronzor continha um poder misterioso.",
		'ko-kr': "옛날 사람들은 동미러의\n등 무늬에 신비한 힘이\n깃들어 있다고 믿었다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
