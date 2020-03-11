import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-122",
	localId: 122,

	// Card informations
	name: {
		en: "Escape Board",
		fr: "Skateboard Évasion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/122/high",
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
			fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de Colorless et il peut battre en retraite même s’il est Endormi ou Paralysé.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
