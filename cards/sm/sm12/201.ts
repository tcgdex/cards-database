import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-201",
	localId: 201,

	// Card informations
	name: {
		en: "Professor Oak's Setup",
		fr: "Installation du Professeur Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/201/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/201/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/201/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/201/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 Pokémon de base de types différents dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
