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
		en: "Moon & Sun Badge"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nIf the Pokemon V this card is attached to has \"Espeon\" or \"Umbreon\" in its name, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to that Pokemon."
	},

	trainerType: "Tool"
}

export default card