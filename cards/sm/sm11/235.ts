import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-235",
	localId: 235,

	// Card informations
	name: {
		en: "Misty's Favor",
		fr: "Faveur d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/235/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/235/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/235/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/235/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 cartes Supporter dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
