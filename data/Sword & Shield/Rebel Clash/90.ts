import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		it: "Dreepy",
		pt: "Dreepy",
		de: "Grolldra"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Summon",
				fr: "Citation",
				es: "Llamamiento",
				it: "Invocazione",
				pt: "Convidar",
				de: "Herbeirufen"
			},
			effect: {
				en: "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Dreepy y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Dreepy e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 Dreepy no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Grolldra und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 40,

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
			value: "-30"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Psychic"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It's capable of flying faster than 120 mph. It battles alongside Dreepy and dotes on them until they successfully evolve."
	},

	thirdParty: {
		cardmarket: 457868
	}
}

export default card
