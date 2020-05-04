import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-82",
	localId: 82,

	// Card informations
	name: {
		en: "Pokédex",
		fr: "Pokédex",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Keiji Kinebuchi",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
