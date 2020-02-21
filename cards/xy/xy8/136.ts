import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-136",
	localId: 136,

	// Card informations
	name: {
		en: "Fisherman",
		fr: "Pêcheur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/136/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/136/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/136/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Prenez 4 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
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
