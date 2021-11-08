import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		it: "Sandile",
		pt: "Sandile",
		de: "Ganovil"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dredge Up",
				fr: "Extraction",
				es: "Ventilar",
				it: "Dragaggio",
				pt: "Dragar",
				de: "Ausbaggern"
			},
			effect: {
				en: "Discard the top 3 cards of your opponent's deck.",
				fr: "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
				es: "Descarta las 3 primeras cartas de la baraja de tu rival.",
				it: "Scarta le prime tre carte del mazzo del tuo avversario.",
				pt: "Descarte as 3 cartas de cima do baralho do seu oponente.",
				de: "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Sandile's still not good at hunting, so it mostly eats things that have collapsed in the desert. It's called \"the cleaner of the desert.\""
	}
}

export default card
