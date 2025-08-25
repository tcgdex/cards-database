import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Bill",
		fr: "Léo",
		de: "Bill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 2 cartes.",
		de: "Ziehe 2 Karten."
	},

	thirdParty: {
		cardmarket: 273786,
		tcgplayer: 42435
	}
}

export default card
