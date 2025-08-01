import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rip and Run",
				fr: "Échapée Belle",
				es: "Quita y Corre",
				it: "Prendi e Fuggi",
				pt: "Arrancar e Fugir",
				de: "Diebesflucht"
			},
			effect: {
				en: "Discard a random card from your opponent’s hand. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire. Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scarta una carta a caso dalla mano del tuo avversario. Scambia questo Pokémon con uno della tua panchina.",
				pt: "Descarte 1 carta aleatória da mão do seu oponente. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Plongée Rapide",
				es: "Picado Rápido",
				it: "Immersione Rapida",
				pt: "Mergulho Veloz",
				de: "Tempohechtsprung"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 316000
	}
}

export default card
