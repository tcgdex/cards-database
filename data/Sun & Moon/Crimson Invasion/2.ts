import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
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
				en: "Search your deck for up to 3 Kakuna and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Coconfort dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 Kakuna y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre Kakuna e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 Kakuna no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Kokuna und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 311852,
		tcgplayer: 149023
	}
}

export default card
