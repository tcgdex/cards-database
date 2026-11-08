import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Gastrodon East Sea",
		'fr-fr': "Tritosor Mer Orient",
		'de-de': "Gastrodon Östliches Meer"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellos East Sea",
		'fr-fr': "Sancoki Mer Orient",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Osmosis",
				'fr-fr': "Pression osmose",
				'de-de': "Osmotischer Druck"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have Gastrodon West Sea in play, you may move up to 3 damage counters from Gastrodon East Sea to 1 of your Gastrodon West Sea.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si vous possédez Tritosor Mer Occident\n en jeu, vous pouvez déplacer jusqu'à 3 marqueurs de dégât de Tritosor Mer Orient\n sur 1 de vos Tritosor Mer Occident\n.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Gastrodon Westliches Meer im Spiel hast, bis zu 3 Schadensmarken von Gastrodon Östliches Meer entfernen und auf 1 deiner Gastrodon Westliches Meer legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague diminutrice",
				'de-de': "Schwindende Welle"
			},
			effect: {
				'en-us': "Does 80 damage minus 10 damage for each damage counter on Gastrodon East Sea.",
				'fr-fr': "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Tritosor Mer Orient.",
				'de-de': "Dieser Angriff fügt 80 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Gastrodon Östliches Meer zu."
			},
			damage: "80-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It has a pliable body without any bones. If any part of its body is torn off, it grows right back.",
	},

	thirdParty: {
		cardmarket: 277761,
		tcgplayer: 85657
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
