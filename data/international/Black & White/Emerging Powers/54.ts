import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		529,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hone Claws",
				'fr-fr': "Aiguisage",
			},
			effect: {
				'en-us': "During your next turn, each of this Pokémon's attacks does 30 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can dig through the ground at a speed of 30 mph. It could give a car running aboveground a good race.",
	},

	thirdParty: {
		cardmarket: 280019,
		tcgplayer: 84964
	}
}

export default card
