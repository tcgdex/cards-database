import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta",
		de: "Meloetta"
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
				en: "Accelerating Spin",
				fr: "Rotation Accélérée",
				es: "Giro Trepidante",
				it: "Celerogiro",
				pt: "Giro Aceleratório",
				de: "Beschleunigende Drehung"
			},
			effect: {
				en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon. Then, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon. Ensuite, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Une 2 cartas de Energía Fighting de tu pila de descartes a este Pokémon. Después, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Assegna a questo Pokémon due carte Energia Fighting dalla tua pila degli scarti. Poi, scambia questo Pokémon con uno della tua panchina",
				pt: "Ligue 2 cards de Energia Fighting da sua pilha de descarte a este Pokémon. Em seguida, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Lege 2 Fighting-Energiekarten von deinem Ablagestapel an dieses Pokémon an. Tausche dieses Pokémon anschließend gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prima Rondo",
				fr: "Rondo Dansant",
				es: "Rondó Primo",
				it: "Primarondò",
				pt: "Prima Melodia",
				de: "Prima-Rondo"
			},
			effect: {
				en: "If this Pokémon has any Psychic Energy attached to it, this attack does 50 more damage.",
				fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Psychic unida a él, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Psychic assegnate, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon possuir alguma Energia Psychic ligada a ele, este ataque causará 50 de danos adicionais.",
				de: "Wenn an dieses Pokémon bereits Psychic-Energie angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 286331
	}
}

export default card
