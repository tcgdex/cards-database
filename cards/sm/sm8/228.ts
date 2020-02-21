import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-228",
	localId: 228,

	// Card informations
	name: {
		en: "Adventure Bag",
		fr: "Sac Aventure",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/228/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/228/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/228/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/228/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
