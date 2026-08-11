import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'es-es': "Gigalith",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'de-de': "Brockoloss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 150,

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
			],
			name: {
				'en-us': "Core Cannon",
				'fr-fr': "Super Canon",
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon for each Fighting Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 1 des Pokémon de votre adversaire pour chaque Énergie Fighting attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Gem",
				'fr-fr': "Rayon Gemme",
			},

			damage: 90,

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
		'en-us': "Compressing the energy from its internal core lets it fire off an attack capable of blowing away a mountain.",
	},

	thirdParty: {
		cardmarket: 280184,
		tcgplayer: 85706
	}
}

export default card
