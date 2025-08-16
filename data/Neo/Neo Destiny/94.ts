import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Impostor Professor Oak's Invention",
		fr: "L'invention du faux professeur Chen",
		de: "Erfindung des falschen Professor Eich"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les cartes Récompense de votre adversaire. Vous pouvez l'obliger à les mélanger à son deck. Si c'est le cas, votre adversaire prend le même nombre de cartes au-dessus de son deck et les utilise comme nouvelles cartes Récompense (sans les regarder).",
		de: "Look at your opponent´s Prize card. You may have your opponent shuffle them into his or her deck. If you do, your opponent takes that many cards from the top of his or her deck and sets them aside as his or her new Prize cards (without looking at them)."
	},

	thirdParty: {
		cardmarket: 274746,
		tcgplayer: 86272
	}
}

export default card
