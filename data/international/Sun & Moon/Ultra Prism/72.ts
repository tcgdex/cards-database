import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
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
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Rip and Run",
				'fr-fr': "Échapée Belle",
				'es-es': "Quita y Corre",
				'it-it': "Prendi e Fuggi",
				'pt-br': "Arrancar e Fugir",
				'de-de': "Diebesflucht"
			},
			effect: {
				'en-us': "Discard a random card from your opponent’s hand. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire. Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Dive",
				'fr-fr': "Plongée Rapide",
				'es-es': "Picado Rápido",
				'it-it': "Immersione Rapida",
				'pt-br': "Mergulho Veloz",
				'de-de': "Tempohechtsprung"
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

	description: {
		'en-us': "If its Murkrow cronies fail to catch food for it, or if it feels they have betrayed it, it will hunt them down wherever they are and punish them.",
	},

	thirdParty: {
		cardmarket: 316000,
		tcgplayer: 157689
	}
}

export default card
