import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-99",
	localId: 99,

	// Card informations
	name: {
		en: "Sparkling Robe",
		fr: "Peignoir Scintillant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant le Pokémon concerné.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
