import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'es-es': "Meloetta",
		'it-it': "Meloetta",
		'pt-br': "Meloetta",
		'de-de': "Meloetta"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Accelerating Spin",
				'fr-fr': "Rotation Accélérée",
				'es-es': "Giro Trepidante",
				'it-it': "Celerogiro",
				'pt-br': "Giro Aceleratório",
				'de-de': "Beschleunigende Drehung"
			},
			effect: {
				'en-us': "Attach 2 Fighting Energy cards from your discard pile to this Pokémon. Then, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon. Ensuite, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Une 2 cartas de Energía Fighting de tu pila de descartes a este Pokémon. Después, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a questo Pokémon due carte Energia Fighting dalla tua pila degli scarti. Poi, scambia questo Pokémon con uno della tua panchina",
				'pt-br': "Ligue 2 cards de Energia Fighting da sua pilha de descarte a este Pokémon. Em seguida, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 2 Fighting-Energiekarten von deinem Ablagestapel an dieses Pokémon an. Tausche dieses Pokémon anschließend gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prima Rondo",
				'fr-fr': "Rondo Dansant",
				'es-es': "Rondó Primo",
				'it-it': "Primarondò",
				'pt-br': "Prima Melodia",
				'de-de': "Prima-Rondo"
			},
			effect: {
				'en-us': "If this Pokémon has any Psychic Energy attached to it, this attack does 50 more damage.",
				'fr-fr': "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Psychic unida a él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Psychic assegnate, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon possuir alguma Energia Psychic ligada a ele, este ataque causará 50 de danos adicionais.",
				'de-de': "Wenn an dieses Pokémon bereits Psychic-Energie angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
	},

	thirdParty: {
		cardmarket: 286331,
		tcgplayer: 107204
	}
}

export default card
