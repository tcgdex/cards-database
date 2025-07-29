import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

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

	effect: {
		fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât (retirez-en 1 si ce Pokémon n'en possède qu'1).",
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses Pokémon nur 1 hat)."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277617
	}
}

export default card
