import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-183",
	localId: 183,

	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/183/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/183/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 69,
		name: "Studio Bora Inc."
	},



	attacks: [{
		name: {},
		text: {
			en: "Switch your Active Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez votre Pokémon Actif contre l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
