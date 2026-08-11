import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Recycle",
		'fr-fr': "Recyclage",
		'de-de': "Wiederverwertung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, put a card in your discard pile on top of your deck.",
		'fr-fr': "Lancez une pièce. Si c'est face, déplacez une carte de votre pile de défausse vers le sommet de votre deck.",
		'de-de': "Wirf eine Münze. Bei 'Kopf' suche eine Karte aus deinem Ablagestapel und lege sie oben auf dein Deck."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273922,
				tcgplayer: 44463
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273922,
				tcgplayer: 44463
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
