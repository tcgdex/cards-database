import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Uniforme de Survie",
		en: "Expedition Uniform",
		es: "Uniforme de Expedición",
		it: "Completo da esplorazione",
		pt: "Uniforme de Expedição",
		de: "Entdecker-Set"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Regardez les 3 cartes du dessous de votre deck, puis placez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		en: "Look at the bottom 3 cards of your deck and put them on top of your deck in any order.",
		es: "Mira las 3 últimas cartas de tu baraja y ponlas en la parte superior de tu baraja en el orden que quieras.",
		it: "Guarda le ultime tre carte del tuo mazzo e mettile in cima nell'ordine che preferisci.",
		pt: "Olhe as 3 cartas de baixo do seu baralho e coloque-as como as cartas de cima do seu baralho em qualquer ordem.",
		de: "Schau dir die untersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge auf dein Deck."
	},

	trainerType: "Item",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
