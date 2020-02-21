import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-231",
	localId: 231,

	// Card informations
	name: {
		en: "Mallow & Lana",
		fr: "Barbara et Néphie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/231/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/231/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/231/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/231/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc. \n\nLorsque vous jouez cette carte, vous pouvez défausser 2 autres cartes de votre main. Dans ce cas, soignez 120 dégâts au Pokémon que vous avez déplacé vers votre Banc.",
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
