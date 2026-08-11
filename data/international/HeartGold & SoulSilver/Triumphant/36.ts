import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'de-de': "Kangama"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [115],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Split Spiral Punch",
				'fr-fr': "Coup d’poing en demi spirale",
				'de-de': "Spiralhieb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dizzy Punch",
				'fr-fr': "Uppercut",
				'de-de': "Irrschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it is safe, the young gets out of the belly pouch to play. The adult keeps a close eye on the youngster."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86423,
				cardmarket: 279566
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279566,
				tcgplayer: 86423
			}
		},
	],

}

export default card
