import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Canon",
		en: "Beauty",
		es: "Modelo",
		it: "Bellezza",
		pt: "Modelo",
		de: "Schönheit"
	},

	illustrator: "kirisAki",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		fr: "Si vous jouez en premier, vous pouvez jouer cette carte pendant votre premier tour.\n\nPiochez 2 cartes.",
		en: "If you go first, you may play this card during your first turn.\n\nDraw 2 cards.",
		es: "Si sales primero, puedes jugar esta carta durante tu primer turno.\n\nRoba 2 cartas.",
		it: "Se inizi per primo, puoi giocare questa carta durante il tuo primo turno.\n\nPesca due carte.",
		pt: "Se você for primeiro, poderá jogar esta carta no seu primeiro turno.\n\nCompre 2 cartas.",
		de: "Wenn du als Erster am Zug bist, kannst du diese Karte während deines ersten Zuges spielen.\n\nZiehe 2 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 512450
	}
}

export default card
