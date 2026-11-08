import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor Burnet",
		'fr-fr': "Professeure Pimprenelle",
		'es-es': "Profesora Pimpinela",
		'it-it': "Professoressa Magnolia",
		'pt-br': "Professora Bruna",
		'de-de': "Prof. Burnett"
	},

	illustrator: "kirisAki",
	rarity: "Full Art Trainer",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 cards and discard them. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis défaussez-les. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas y descártalas. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due carte e scartale. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682290,
				tcgplayer: 452044
			}
		},
	],
}

export default card
