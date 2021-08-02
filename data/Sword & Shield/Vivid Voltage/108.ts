import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 20,

		},
		{
			cost: [
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
				en: "Discard the top 3 cards of your opponent’s deck.",
				fr: "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
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
	}
}

export default card
