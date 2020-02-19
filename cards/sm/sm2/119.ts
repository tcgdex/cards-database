import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-119",
	localId: 119,

	// Card informations
	name: {
		en: "Aqua Patch",
		fr: "Fortifiant Aquatique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/119/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/119/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une carte Énergie Water de votre pile de défausse à l’un de vos Pokémon Water de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

