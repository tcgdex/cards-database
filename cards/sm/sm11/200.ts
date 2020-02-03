import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-200",
	localId: 200,

	// Card informations
	name: {
		en: "Hapu",
		fr: "Paulie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/200/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/200/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/200/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/200/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 6 cartes du dessus de votre deck, puis ajoutez 2 d’entre elles à votre main. Défaussez les autres cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

