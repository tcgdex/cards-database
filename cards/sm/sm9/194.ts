import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-194",
	localId: 194,

	// Card informations
	name: {
		en: "Judge Whistle",
		fr: "Sifflet de Juge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/194/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/194/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/194/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/194/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n• Piochez une carte.\n• Placez une carte Juge de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
