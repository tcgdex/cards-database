import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Professor Burnet",
		fr: "Professeure Pimprenelle",
		es: "Profesora Pimpinela",
		it: "Professoressa Magnolia",
		pt: "Professora Bruna",
		de: "Prof. Burnett"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 2 cards and discard them. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis défaussez-les. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 2 cartas y descártalas. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a due carte e scartale. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 2 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 2 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card