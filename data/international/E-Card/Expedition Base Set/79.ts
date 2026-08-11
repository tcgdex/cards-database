import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'de-de': "Georok"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [75],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Hurl",
				'fr-fr': "Lance-pierre",
				'de-de': "Steinschleuderer"
			},
			effect: {
				'en-us': "Don't apply Resistance.",
				'fr-fr': "N'appliquez pas la Résistance.",
				'de-de': "Wende Resistenz nicht an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
				'de-de': "Steinhagel"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Benched Pokémon (1 if he or she has only 1). This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon du Banc de votre adversaire (1 seul s'il n'en a qu'un). Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Bestimme 2 der Pokémon auf der Bank deines Gegners (1, wenn er nur 1 hat). Dieser Angriff fügt jedem dieser Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85888,
				cardmarket: 274954
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85888,
				cardmarket: 274954
			},
		},
	],
}

export default card
