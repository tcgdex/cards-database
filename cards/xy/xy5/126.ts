import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-126",
	localId: 126,

	// Card informations
	name: {
		en: "Energy Retrieval",
		fr: "Récupération d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/126/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/126/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/126/high",
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
			fr: "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
