import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'es-es': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
		'de-de': "Tropius"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 100,

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
				'en-us': "Return",
				'fr-fr': "Retour",
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Energy Press",
				'fr-fr': "Pression Énergétique",
			},
			effect: {
				'en-us': "Does 20 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It flies by flapping its broad leaves and gives the sweet, delicious fruit around its neck to children.",
	},

	thirdParty: {
		cardmarket: 281026,
		tcgplayer: 90063
	}
}

export default card
