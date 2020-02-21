import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-168",
	localId: 168,

	// Card informations
	name: {
		en: "Dust Island",
		fr: "Île Poussière",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/168/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/168/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/168/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque l’effet d’une carte Dresseur amène l’un des joueurs à échanger son Pokémon Actif Empoisonné avec l’un de ses Pokémon de Banc, le nouveau Pokémon Actif est affecté par cet État Spécial.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
