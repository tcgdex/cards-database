import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-86",
	localId: 86,

	// Card informations
	name: {
		en: "Mega Turbo",
		fr: "Méga-Turbo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/86/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/86/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/86/high",
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
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon Méga-Évolution.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
