import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Négapi",
		es: "Minun",
		it: "Minun",
		pt: "Minun",
		de: "Minun"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Negative Discard",
				fr: "Défausse Négative",
				es: "Descarte Negativo",
				it: "Scarto Negativo",
				pt: "Descarte Negativo",
				de: "Negative Ablage"
			},
			effect: {
				en: "Put 2 basic Energy cards from your discard pile into your hand.",
				fr: "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
				es: "Pon 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
				it: "Prendi due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 cards de Energias básicas da pilha de descarte em sua mão.",
				de: "Nimm 2 Basis-Energiekarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
				es: "Impacto Estático",
				it: "Shock Statico",
				pt: "Choque de Estática",
				de: "Statischer Schock"
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281696
	}
}

export default card
