import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mudkip",
		fr: "Gobou",
		de: "Hydropi"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Submerge",
				fr: "Submerger",
				de: "Untertauchen"
			},
			effect: {
				en: "As long as Mudkip is on your Bench, prevent all damage done to Mudkip by attacks (both yours and your opponent's).",
				fr: "Tant que Gobou est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques (les vôtres et celles de votre adversaire).",
				de: "Solange sich Hydropi auf deiner Bank befindet, verhindere allen Schaden, der Hydropi durch Angriffe zugefügt wird (eigene und gegnerische Angriffe)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue",
				de: "Lehmschelle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277138,
		tcgplayer: 87611
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
