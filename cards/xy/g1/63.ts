import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Imakuni?",
		fr: "Imakuni ?",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/63/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/63/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/63/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Votre Pokémon Actif est maintenant Confus.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

