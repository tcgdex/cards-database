import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [762],

	name: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Captivate",
				'fr-fr': "Séduction",
				'es-es': "Seducción",
				'it-it': "Incanto",
				'pt-br': "Cativar",
				'de-de': "Liebreiz"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
				'es-es': "Palmetazo",
				'it-it': "Schiaffo",
				'pt-br': "Estalo",
				'de-de': "Klatscher"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "As it twirls like a dancer, a sweet smell spreads out around it. Anyone who inhales the scent will feel a surge of happiness."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482949,
				tcgplayer: 219228
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482949,
				tcgplayer: 219228
			}
		},
	],
}

export default card
