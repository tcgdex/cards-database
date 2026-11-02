import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Shauna",
		fr: "Sannah",
		de: "Sannah"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		en: "Shuffle your hand into your deck. Then, draw 5 cards.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten. Du kannst während deines Zuges (vor deinem Angriff) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288507,
		tcgplayer: 113730
	}
}

export default card
