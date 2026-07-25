import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Professor Oak's Visit",
		de: "Professor Eichs Besuch"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Then, choose a card from your hand and put it on the bottom of your deck.",
		de: "Ziehe 3 Karten. Danach wähle 1 Karte von deiner Hand und lege sie unter dein Deck."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88406,
				cardmarket: 278962
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278962,
				tcgplayer: 88406
			}
		},
	],

	retreat: 0
}

export default card
