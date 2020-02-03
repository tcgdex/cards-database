import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-236",
	localId: 236,

	// Card informations
	name: {
		en: "Poké Maniac",
		fr: "Pokémaniac",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/236/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/236/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/236/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/236/high.png",
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







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

