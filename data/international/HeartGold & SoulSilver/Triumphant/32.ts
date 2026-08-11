import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'de-de': "Dragonir"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [148],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Search and Invite",
				'fr-fr': "Rechercher et inviter",
				'de-de': "Suchen und Einladen"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu’à 2 Pokémon dans votre deck, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its crystalline orbs appear to give this Pokémon the power to freely control the weather."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84901,
				cardmarket: 279562
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279562,
				tcgplayer: 84901
			}
		},
	],

}

export default card
