import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		540,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Multiply",
				fr: "Multiplication",
				es: "Multiplicar",
				it: "Moltiplicazione",
				pt: "Multiplicar",
				de: "Vervielfachung"
			},
			effect: {
				en: "Search your deck for up to 2 Sewaddle and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Larveyette dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Sewaddle y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Sewaddle e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Sewaddle no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Strawickl und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 10,

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
