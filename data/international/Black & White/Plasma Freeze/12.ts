import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vengeance",
				'fr-fr': "Rétorsion",
			},
			effect: {
				'en-us': "Does 10 more damage for each Pokémon in your discard pile.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Tackle",
				'fr-fr': "Charge Énergétique",
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees F.",
	},

	thirdParty: {
		cardmarket: 280890,
		tcgplayer: 85502
	}
}

export default card
