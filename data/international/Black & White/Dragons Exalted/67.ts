import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'es-es': "Gigalith",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'de-de': "Brockoloss"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Revenge Cannon",
				'fr-fr': "Canon Talion",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on each of your Benched Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur chacun de vos Pokémon de Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
			},
			effect: {
				'en-us': "This Pokémon does 40 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 40 dégâts.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The solar energy absorbed by its body's orange crystals is magnified internally are fired from its mouth.",
	},

	thirdParty: {
		cardmarket: 280506,
		tcgplayer: 85707
	}
}

export default card
