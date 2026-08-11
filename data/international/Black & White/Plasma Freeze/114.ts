import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Tornadus-EX",
		'fr-fr': "Boréas-EX",
		'es-es': "Tornadus-EX",
		'it-it': "Tornadus-EX",
		'pt-br': "Tornadus-EX",
		'de-de': "Boreos-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		641,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Windfall",
				'fr-fr': "Rafale de Vent",
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jet Blast",
				'fr-fr': "Rafale d'Explosions",
			},
			effect: {
				'en-us': "Does 30 more damage for each Plasma Energy attached to this Pokémon.",
				'fr-fr': "Inflige 30 dégâts supplémentaires pour chaque Énergie Plasma attachée à ce Pokémon.",
			},
			damage: 60,

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
	retreat: 2,



}

export default card
