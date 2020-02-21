import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-82",
	localId: 82,

	// Card informations
	name: {
		en: "Pokédex",
		fr: "Pokédex",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
