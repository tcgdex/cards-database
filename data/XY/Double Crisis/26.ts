import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua Grunt",
		fr: "Sbire de la Team Aqua",
	},

	illustrator: "GAME FREAK inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.) Piochez 3 cartes. Si vous avez défaussé un Pokémon de la Team Aqua, piochez une carte supplémentaire.",
		en: "Discard a card from your hand. (If you can't discard a card, you can't play this card.) Draw 3 cards. If you discarded a Team Aqua Pokémon, draw 1 more card."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 282537
	}
}

export default card
