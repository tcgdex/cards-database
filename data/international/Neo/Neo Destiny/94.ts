import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Impostor Professor Oak's Invention",
		'fr-fr': "L'invention du faux professeur Chen",
		'de-de': "Erfindung des falschen Professor Eich"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at your opponent's Prize cards. You may have your opponent shuffle them into his or her deck. If you do, your opponent takes that many cards from the top of his or her deck and sets them aside as his or her new Prize cards (without looking at them).",
		'fr-fr': "Regardez les cartes Récompense de votre adversaire. Vous pouvez l'obliger à les mélanger à son deck. Si c'est le cas, votre adversaire prend le même nombre de cartes au-dessus de son deck et les utilise comme nouvelles cartes Récompense (sans les regarder).",
		'de-de': "Look at your opponent´s Prize card. You may have your opponent shuffle them into his or her deck. If you do, your opponent takes that many cards from the top of his or her deck and sets them aside as his or her new Prize cards (without looking at them)."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274746,
				tcgplayer: 86272
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274746,
				tcgplayer: 86272
			}
		}
	]
}

export default card
