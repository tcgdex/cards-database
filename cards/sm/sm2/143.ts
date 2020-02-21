import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-143",
	localId: 143,

	// Card informations
	name: {
		fr: "Pectorius",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/sm2/143/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/sm2/143/high",
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
			fr: "Mélangez votre main avec votre deck. Si vous avez utilisé votre attaque GX, piochez 7 cartes. Sinon, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Gardiens Ascendants",
		code: "sm2"
	}
}

export default card
