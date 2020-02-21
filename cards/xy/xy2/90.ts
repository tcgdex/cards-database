import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Lysandre",
		fr: "Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/90/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/90/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
