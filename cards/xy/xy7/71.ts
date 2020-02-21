import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-71",
	localId: 71,

	// Card informations
	name: {
		en: "Eco Arm",
		fr: "Bras Écologique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 3 cartes Outil Pokémon de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
