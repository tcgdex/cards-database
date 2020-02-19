import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-138",
	localId: 138,

	// Card informations
	name: {
		en: "Lure Ball",
		fr: "Appât Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/138/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/138/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/138/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/138/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 3 pièces. Pour chaque côté face, ajoutez un Pokémon Évolutif de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

