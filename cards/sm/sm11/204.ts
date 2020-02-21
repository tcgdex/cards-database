import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-204",
	localId: 204,

	// Card informations
	name: {
		en: "Poké Maniac",
		fr: "Pokémaniac",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/204/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/204/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/204/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/204/high",
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
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon avec un Coût de Retraite de 4, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
