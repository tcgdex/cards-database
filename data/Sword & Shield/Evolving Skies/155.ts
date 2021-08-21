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
		en: "Ribbon Badge"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nIf the Pokemon V this card is attached to has \"Sylveon\" in its name and is Knocked Out by damage from an attack from your opponent’s Pokemon, that player takes 1 fewer Prize card."
	},

	trainerType: "Tool"
}

export default card