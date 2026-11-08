import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'de-de': "Pinsir"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Grip and Squeeze",
				'fr-fr': "Empoigner et presser",
				'de-de': "Grapschen und Quetschen"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Guillotine",
				'fr-fr': "Guillotine puissante",
				'de-de': "Kräftige Guillotine"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack's base damage is 10 instead of 100.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez une pile, les dégâts de base de cette attaque sont de 10 au lieu de 100.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" gezeigt haben, beträgt der Grundschaden dieses Angriffs 10 Schadenspunkte anstelle von 100 Schadenspunkten."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It grips prey with its pincers until the prey is torn in half. What it can't tear, it tosses far.",
	},

	thirdParty: {
		cardmarket: 277812,
		tcgplayer: 88137
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
