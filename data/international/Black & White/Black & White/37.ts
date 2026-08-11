import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Swanna",
		'fr-fr': "Lakmécygne",
		'es-es': "Swanna",
		'it-it': "Swanna",
		'pt-br': "Swanna",
		'de-de': "Swaroness"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		581,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Feather Dance",
				'fr-fr': "Danse-Plume",
			},
			effect: {
				'en-us': "During your next turn, each of this Pokémon's attacks does 40 more damage(before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Ring",
				'fr-fr': "Anneau Hydro",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 40,

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
		'en-us': "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
	},

	thirdParty: {
		cardmarket: 279775,
		tcgplayer: 89684
	}
}

export default card
