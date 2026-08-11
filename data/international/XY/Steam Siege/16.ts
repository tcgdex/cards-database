import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Returning Flames",
				'fr-fr': "Retour de Flammes",
				'es-es': "Llamas Retorno",
				'it-it': "Ritornofiamma",
				'pt-br': "Retorno das Chamas",
				'de-de': "Flammenheimkehr"
			},
			effect: {
				'en-us': "Put 2 Fire Energy cards from your discard pile into your hand.",
				'fr-fr': "Prenez 2 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
				'es-es': "Pon 2 cartas de Energía Fire de tu pila de descartes en tu mano.",
				'it-it': "Prendi due carte Energia Fire dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 cards de Energia Fire da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 2 Fire-Energiekarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Live Coal",
				'fr-fr': "Charbon Mutant",
				'es-es': "Carbón Activado",
				'it-it': "Carboni Ardenti",
				'pt-br': "Carvão Vivo",
				'de-de': "Glühende Kohlen"
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

	retreat: 1,

	description: {
		'en-us': "Its legs grow strong while it chases after its parent. It runs in fields and mountains all day.",
	},

	thirdParty: {
		cardmarket: 291523,
		tcgplayer: 121005
	}
}

export default card
