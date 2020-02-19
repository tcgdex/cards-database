import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-126",
	localId: 126,

	// Card informations
	name: {
		en: "Hala",
		fr: "Pectorius",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/126/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/126/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/126/high.png",
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
			fr: "Mélangez votre main avec votre deck. Si vous avez utilisé votre attaque GX, piochez 7 cartes. Sinon, piochez 4 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

