import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-173",
	localId: 173,

	// Card informations
	name: {
		en: "Poké Kid",
		fr: "Poké Enfant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/173/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/173/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/173/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/173/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
