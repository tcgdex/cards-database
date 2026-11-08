import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'de-de': "Barschwa"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Submerge",
				'fr-fr': "Submerger",
				'de-de': "Untertauchen"
			},
			effect: {
				'en-us': "As long as Feebas is on your Bench, prevent all damage done to Feebas by attacks (both yours and your opponent's).",
				'fr-fr': "Tant que Barpau est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques (les vôtres et celles de votre adversaire).",
				'de-de': "Solange sich Barschwa auf deiner Bank befindet, verhindere allen Schaden, der Barschwa durch Angriffe zugefügt wird (eigene und gegnerische Angriffe)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Ausfall"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 85402,
		cardmarket: 276560
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85402,
				cardmarket: 276560
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85402,
				cardmarket: 276560
			},
		}
	],
}

export default card
