import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Arrokuda",
		fr: "Embrochet",
		es: "Arrokuda",
		it: "Arrokuda",
		pt: "Arrokuda",
		de: "Pikuda"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flock",
				fr: "Nuée",
				es: "Multitud",
				it: "Frotta",
				pt: "Bando",
				de: "Ausschwärmen"
			},
			effect: {
				en: "Search your deck for up to 2 Arrokuda and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 Embrochet, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Arrokuda y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Arrokuda e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Arrokuda no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Pikuda und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Pikser"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It’s very proud of that jaw."
	}
}

export default card
