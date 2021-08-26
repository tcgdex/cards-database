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
		en: "Elemental Badge"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nIf the Pokemon V this card is attached to has \"Vaporeon\", \"Jolteon\", or \"Flareon\" in its name, its attacks cost Colorless less."
	},

	trainerType: "Tool"
}

export default card