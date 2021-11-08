import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Milo",
		fr: "Percy",
		es: "Percy",
		it: "Yarrow",
		pt: "Milo",
		de: "Yarro"
	},

	illustrator: "take",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard up to 2 cards from your hand, and draw 2 cards for each card you discarded in this way.",
		fr: "Défaussez jusqu'à 2 cartes de votre main, puis piochez 2 cartes pour chaque carte défaussée de cette façon.",
		es: "Descarta hasta 2 cartas de tu mano y roba 2 cartas por cada carta que hayas descartado de esta manera.",
		it: "Scarta fino a due carte che hai in mano e pesca due carte per ogni carta che hai scartato in questo modo.",
		pt: "Descarte até 2 cartas da sua mão e compre 2 cartas para cada carta descartada desta forma.",
		de: "Lege bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel und ziehe 2 Karten für jede auf diese Weise auf deinen Ablagestapel gelegte Karte."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
