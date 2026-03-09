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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card.",
		de: "Ziehe 3 Karten. Danach wähle 1 Karte von deiner Hand und lege sie unter dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278962,
		tcgplayer: 88406
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
