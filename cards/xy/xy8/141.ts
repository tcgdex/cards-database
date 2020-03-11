import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-141",
	localId: 141,

	// Card informations
	name: {
		en: "Heavy Boots",
		fr: "Bottes Lourdes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/141/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/141/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/141/high",
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
			fr: "Si le Coût de Retraite du Pokémon auquel cette carte est attachée est de 3 ou plus, ajoutez 20 PV au Pokémon et ce dernier ne peut pas être Confus. (Si le Pokémon est déjà Confus, retirez cet État Spécial.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
