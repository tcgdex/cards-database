import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta",
		de: "Ponita"
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
				en: "Returning Flames",
				fr: "Retour de Flammes",
				es: "Llamas Retorno",
				it: "Ritornofiamma",
				pt: "Retorno das Chamas",
				de: "Flammenheimkehr"
			},
			effect: {
				en: "Put 2 Fire Energy cards from your discard pile into your hand.",
				fr: "Prenez 2 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
				es: "Pon 2 cartas de Energía Fire de tu pila de descartes en tu mano.",
				it: "Prendi due carte Energia Fire dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 cards de Energia Fire da sua pilha de descarte em sua mão.",
				de: "Nimm 2 Fire-Energiekarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
				es: "Carbón Activado",
				it: "Carboni Ardenti",
				pt: "Carvão Vivo",
				de: "Glühende Kohlen"
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

	thirdParty: {
		cardmarket: 291523
	}
}

export default card
