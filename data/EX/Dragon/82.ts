import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Balloon Berry",
		fr: "Baie Ballon",
		de: "Ballonbeere"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie Ballon à un de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.\n\nLorsque le Pokémon auquel Baie Ballon est attachée bat en retraite, défaussez Baie Ballon plutôt que de défausser des cartes Énergie.",
		de: "When the Pokémon Balloon Berry is attached to retreats, discard Balloon Berry instead of discarding Energy cards."
	},

	thirdParty: {
		tcgplayer: 83708,
		cardmarket: 275959
	}
}

export default card
