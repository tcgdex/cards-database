import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-126",
	localId: 126,

	// Card informations
	name: {
		en: "Looker",
		fr: "Beladonis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/126/high",
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
			fr: "Piochez 3 cartes du dessous de votre deck.",
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
