import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'de-de': "Waaty"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Spear",
				'fr-fr': "Lance-éclair",
				'de-de': "Donnerspeer"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "As a result of storing too much electricity, it developed patches where even downy wool won't grow.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85485,
				cardmarket: 279686
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85485,
				cardmarket: 279686
			},
		},
	],

}

export default card
