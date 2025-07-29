import { Card } from '../../../interfaces'
import Set from '../Stormfront'

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
		cardmarket: 278390
	}
}

export default card
