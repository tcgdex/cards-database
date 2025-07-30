import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Retirez jusqu'à deux marqueurs de dégât à l'un de vos Pokémon.",
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses nur 1 hat)."
	},

	thirdParty: {
		cardmarket: 275739
	}
}

export default card
