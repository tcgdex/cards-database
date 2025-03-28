import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Brilliant Blender",
		fr: "Mixeur Brillant",
		es: "Batidora Espléndida",
		it: "Mixer Meraviglioso",
		pt: "Liquidificador Perfeito",
		de: "Prächtiger Mixer"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 5 cards and discard them. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 5 cartes, puis défaussez-les. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 5 cartas y descártalas. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a cinque carte e scartale. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 5 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 5 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
