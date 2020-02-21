import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-129",
	localId: 129,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/129/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/129/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/129/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
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
