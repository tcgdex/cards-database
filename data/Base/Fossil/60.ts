import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Gambler",
		fr: "Joueur",
		de: "Spieler"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main dans votre deck. Lancez une pièce. Si c'est face, piochez 8 cartes. Si c'est pile, piochez 1 carte.",
		de: "Mische deine hand in dein Deck. Wirf eine Münze. Bei 'Kopf' ziehe acht Karten. Bei 'Zahl' ziehe eine Karte."
	},

	thirdParty: {
		cardmarket: 273921,
		tcgplayer: 44462
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
