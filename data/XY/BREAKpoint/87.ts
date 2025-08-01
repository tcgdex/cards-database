import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		es: "Rattata",
		it: "Rattata",
		pt: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dangerous Suspicion",
				fr: "Soupçon Dangereux",
				es: "Sospecha Peligrosa",
				it: "Sospetti Pericolosi",
				pt: "Suspeita Perigosa",
				de: "Gefährlicher Verdacht"
			},
			effect: {
				en: "Draw a card. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Piochez une carte. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Roba 1 carta. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Pesca una carta. Scambia questo Pokémon con uno della tua panchina.",
				pt: "Compre um card. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Ziehe 1 Karte. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288262
	}
}

export default card
