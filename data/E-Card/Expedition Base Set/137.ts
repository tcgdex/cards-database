import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Léo",
		de: "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Si vous avez des cartes dans votre main, mélangez-en une à votre deck et piochez ensuite 3 cartes.",
		de: "Falls du mindestens eine Karte auf deiner Hand hast, mische 1 davon in dein Deck und ziehe dann 3 Karten.",
	},

	thirdParty: {
		cardmarket: 275012,
		tcgplayer: 83837
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
