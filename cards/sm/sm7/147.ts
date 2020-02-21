import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-147",
	localId: 147,

	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/147/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/147/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/147/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/147/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
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
