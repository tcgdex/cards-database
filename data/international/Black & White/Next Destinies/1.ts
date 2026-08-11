import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
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
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Pinch",
				'fr-fr': "Pinces Vigoureuses",
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Grip and Squeeze",
				'fr-fr': "Empoigne Puissante",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It grips prey with its pincers until the prey is torn in half. What it can't tear, it tosses far.",
	},

	thirdParty: {
		cardmarket: 280226,
		tcgplayer: 88140
	}
}

export default card
