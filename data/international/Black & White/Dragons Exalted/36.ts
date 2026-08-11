import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Echoed Voice",
				'fr-fr': "Écho",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drain Punch",
				'fr-fr': "Vampipoing",
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
	},

	thirdParty: {
		cardmarket: 280475,
		tcgplayer: 89058
	}
}

export default card
