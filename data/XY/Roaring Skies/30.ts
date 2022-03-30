import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		353,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bleh",
				fr: "Nananère",
				es: "Chincha Rabiña",
				it: "Linguaccia",
				pt: "Desconforto",
				de: "Bäh"
			},
			effect: {
				en: "Discard a Special Energy attached to 1 of your opponent's Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire.",
				es: "Descarta 1 Energía Especial unida a 1 de los Pokémon de tu rival.",
				it: "Scarta un'Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Descarte uma Energia Especial ligada a 1 dos Pokémon do seu oponente.",
				de: "Lege 1 an ein gegnerisches Pokémon angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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



}

export default card
