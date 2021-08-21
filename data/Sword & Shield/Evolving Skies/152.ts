import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Raihan"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only if any of your Pokemon were Knocked Out during your opponent’s last turn.\nAttach a basic Energy from your discard pile to 1 of your Pokemon. If you do, search your deck for a card and put it into your hand. Then, shuffle your deck."
	},

	trainerType: "Supporter"
}

export default card