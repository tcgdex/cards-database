import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-164",
	localId: 164,

	// Card informations
	name: {
		en: "Lisia",
		fr: "Atalante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/164/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/164/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/164/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 cartes  (Prisme Étoile) dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
