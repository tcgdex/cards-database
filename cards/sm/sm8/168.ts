import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-168",
	localId: 168,

	// Card informations
	name: {
		en: "Aether Foundation Employee",
		fr: "Employés de la Fondation Æther",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/168/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/168/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/168/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/168/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 163,
		name: "take"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 3 Pokémon avec « d’Alola » dans leur nom, de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

