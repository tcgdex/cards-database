import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Ryuta Fuse",
	category: "Trainer",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Professor Burnet",
		'fr-fr': "Professeure Pimprenelle",
		'de-de': "Prof. Burnett",
		'es-es': "Profesora Pimpinela",
		'pt-br': "Professora Bruna",
		'it-it': "Professoressa Magnolia"
	},

	rarity: "Promo",
	trainerType: "Supporter",

	effect: {
		'en-us': "Search your deck for up to 2 cards and discard them. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis défaussez-les. Mélangez ensuite votre deck.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas y descártalas. Después, baraja las cartas de tu baraja.",
		'pt-br': "Procure por até 2 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho.",
		'it-it': "Cerca nel tuo mazzo fino a due carte e scartale. Poi rimischia le carte del tuo mazzo."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 576725
	}
}

export default card
