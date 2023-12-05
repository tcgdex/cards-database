import { Card } from '../../../interfaces'
import Set from '../Delta Species'

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
		fr: "Retirez 2 marqueurs de dégât à 1 de vos Pokémon (retirez-en 1 s'il n'y en a qu'1).",
		de: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1)."
	}
}

export default card
