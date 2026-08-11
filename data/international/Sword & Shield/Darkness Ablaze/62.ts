import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	set: Set,
	hp: 70,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slap",
				'fr-fr': "Gifle",
				'es-es': "Bofetón",
				'it-it': "Sberla",
				'pt-br': "Tapa",
				'de-de': "Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
				'es-es': "Impacto Estático",
				'it-it': "Shock Statico",
				'pt-br': "Choque de Estática",
				'de-de': "Statischer Schock"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stores poison in an internal poison sac and secretes that poison through its skin. If you touch this Pokémon, a tingling sensation follows."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483189,
				tcgplayer: 219416
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483189,
				tcgplayer: 219416
			}
		},
	],
}

export default card
