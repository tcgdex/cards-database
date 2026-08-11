import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'de-de': "Tropius"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [357],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Fruition",
				'fr-fr': "Concrétisation",
				'de-de': "Fruition"
			},
			effect: {
				'en-us': "Move 1 Energy card attached to Tropius to another of your Pokémon and remove 4 damage counters from that Pokémon (all if there are less than 4).",
				'fr-fr': "Déplacez 1 carte Énergie attachée à Tropius sur un autre de vos Pokémon et retirez à ce Pokémon 4 marqueurs de dégât (retirez-les lui tous s'il en a moins de 4).",
				'de-de': "Move 1 Energy card attached to Tropius to another of your Pokémon and remove 4 damage counters from that Pokémon (all if there are less than 4)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Gust"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90057,
				cardmarket: 276101
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 90057,
				cardmarket: 276101
			}
		},
	]
}

export default card
