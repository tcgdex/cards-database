import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-134",
	localId: 134,

	// Card informations
	name: {
		en: "Timer Ball",
		fr: "Chrono Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/134/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/134/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon Évolutif dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
