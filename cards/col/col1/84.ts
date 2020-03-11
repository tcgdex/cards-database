import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Research Record",
		fr: "Archive des recherches",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/84/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/84/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Hideaki Hakozaki",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessus de votre deck et replacez celles que vous voulez sur le dessus de votre deck dans n'importe quel ordre. Ensuite, placez les cartes restantes au-dessous de votre deck dans n'importe quel ordre.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
