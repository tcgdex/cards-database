import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-117",
	localId: 117,

	// Card informations
	name: {
		en: "AZ",
		fr: "A.Z.",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/117/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/117/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez l'un de vos Pokémon dans votre main. (Défaussez toutes les cartes attachées au Pokémon.)",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
