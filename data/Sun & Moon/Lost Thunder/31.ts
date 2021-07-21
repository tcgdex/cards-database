import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
		es: "Combee",
		it: "Combee",
		pt: "Combee",
		de: "Wadribie"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		415,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bee March",
				fr: "Marche Apicole",
				es: "Marcha de las Abejas",
				it: "Sfilata delle Api",
				pt: "Marcha das Abelhas",
				de: "Bienenwanderung"
			},
			effect: {
				en: "Search your deck for up to 3 Combee and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Apitrini dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 Combee y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre Combee e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 Combee no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Wadribie und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
