import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "V-create",
				'fr-fr': "Coup Victoire",
			},
			effect: {
				'en-us': "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
				'fr-fr': "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
	},

	thirdParty: {
		cardmarket: 280137,
		tcgplayer: 90344
	}
}

export default card
