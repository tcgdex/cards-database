import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Full Face Guard"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nIf the Pokemon this card is attached to has no Abilities, it takes 20 less damage from attacks from your opponent’s Pokemon (after applying Weakness and Resistance)."
	},

	trainerType: "Tool"
}

export default card