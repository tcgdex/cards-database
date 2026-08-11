import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [245],

	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "so-taro",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d'Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Loop",
				'fr-fr': "Boucle Aurore",
				'es-es': "Bucle Aurora",
				'it-it': "Circuito Aurora",
				'pt-br': "Loop da Aurora",
				'de-de': "Auroraschleife"
			},
			effect: {
				'en-us': "Put 2 Water Energy attached to this Pokémon into your hand.",
				'fr-fr': "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
				'es-es': "Pon 2 Energías Water unidas a este Pokémon en tu mano.",
				'it-it': "Prendi due Energie Water assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 Energias Water ligadas a este Pokémon na sua mão.",
				'de-de': "Nimm 2 an dieses Pokémon angelegte Water-Energien auf deine Hand."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483059,
				tcgplayer: 219271
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483059,
				tcgplayer: 219271
			}
		},
	],
}

export default card
