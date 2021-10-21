import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fossil Search",
				fr: "Fouille Fossile",
				es: "Búsqueda de Fósiles",
				it: "Raccolta Fossili",
				pt: "Busca por Fóssil",
				de: "Fossilsuche"
			},
			effect: {
				en: "Search your deck for up to 2 Rare Fossil cards and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Fossile Rare, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Fósil Raro y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Fossile Raro e mettile nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas Fóssil Raro no seu baralho e coloque-as no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Seltenes Fossil-Karten und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 40,

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
		en: "The reason it hasn't changed at all in a hundred million years is that it's apparently already a perfect life-form."
	}
}

export default card
