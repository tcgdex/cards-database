import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Passimian",
		fr: "Quartermac",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		766,
	],
	hp: 110,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Spike Draw",
				fr: "Pique-Pioche",
				es: "Robo Pico",
				it: "Battipesca",
				pt: "Comprada Espinhosa",
				de: "Stachelzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas",
				es: "Movimiento Sísmico",
				it: "Movimento Sismico",
				pt: "Arremesso Sísmico",
				de: "Geowurf"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
