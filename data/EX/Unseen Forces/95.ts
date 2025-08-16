import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Retirez 2 marqueurs de dégât à 1 de vos Pokémon (retirez-en 1 si ce Pokémon n'en possède qu'1).",
		de: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1)."
	},

	thirdParty: {
		cardmarket: 276741,
		tcgplayer: 88337
	}
}

export default card
