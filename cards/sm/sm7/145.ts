import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-145",
	localId: 145,

	// Card informations
	name: {
		en: "Steven's Resolve",
		fr: "Résolution de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/145/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/145/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/145/high",
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
			fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck. Votre tour se termine.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
