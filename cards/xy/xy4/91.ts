import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-91",
	localId: 91,

	// Card informations
	name: {
		en: "AZ",
		fr: "A.Z.",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/91/high",
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
			fr: "Placez l'un de vos Pokémon dans votre main. (Défaussez toutes les cartes attachées au Pokémon.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
