import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'de-de': "Sniebel"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [215],

	hp: 60,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Beat Up",
				'fr-fr': "Baston",
				'de-de': "Prügler"
			},
			effect: {
				'en-us': "Flip a coin for each of your Pokémon in play. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf eine Münze für jedes deiner Pokémon im Spiel. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Vicious in nature, it drives Pidgey from their nests and scavenges any leftovers it can find."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279321,
				tcgplayer: 89371
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279321,
				tcgplayer: 89371
			}
		}
	],

}

export default card
