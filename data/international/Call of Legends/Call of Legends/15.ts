import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "Ryo Ueda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [249],

	hp: 100,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque linéaire",
				'de-de': "Linearer Angriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-éclaboussure",
				'de-de': "Hydroplatscher"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,

	description: {
		'en-us': "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86910,
				cardmarket: 279637
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86910,
				cardmarket: 279637
			},
		},
	],

}

export default card
