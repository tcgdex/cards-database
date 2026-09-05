import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Ryuta Fuse",
	category: "Trainer",

	regulationMark: "E",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 749245,
				tcgplayer: 247299
			}
		},
		{
			type: "normal",
			stamp: ["25th-celebration"],
			thirdParty: {
				cardmarket: 576725,
				tcgplayer: 247300
			}
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				cardmarket: 664818,
				tcgplayer: 278685
			}
		},
		{
			type: "normal",
			stamp: ["gabriel-fernandez"],
			thirdParty: {
				cardmarket: 832989,
				tcgplayer: 541790
			}
		},
	],

	name: {
		en: "Professor Burnet",
		fr: "Professeure Pimprenelle",
		de: "Prof. Burnett",
		es: "Profesora Pimpinela",
		pt: "Professora Bruna",
		it: "Professoressa Magnolia"
	},

	rarity: "Promo",
	trainerType: "Supporter",

	effect: {
		en: "Search your deck for up to 2 cards and discard them. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis défaussez-les. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach bis zu 2 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck.",
		es: "Busca en tu baraja hasta 2 cartas y descártalas. Después, baraja las cartas de tu baraja.",
		pt: "Procure por até 2 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho.",
		it: "Cerca nel tuo mazzo fino a due carte e scartale. Poi rimischia le carte del tuo mazzo."
	},
}

export default card
