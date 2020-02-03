import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-233",
	localId: 233,

	// Card informations
	name: {
		en: "Professor Oak's Setup",
		fr: "Installation du Professeur Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/233/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/233/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/233/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/233/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 171,
		name: "Nabana Kensaku"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 Pokémon de base de types différents dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

