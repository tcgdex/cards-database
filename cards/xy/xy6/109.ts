import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-109",
	localId: 109,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
