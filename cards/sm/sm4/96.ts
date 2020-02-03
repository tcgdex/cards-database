import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Lusamine",
		fr: "Elsa-Mina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/96/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/96/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 163,
		name: "take"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez une combinaison de 2 cartes Supporter et cartes Stade de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

