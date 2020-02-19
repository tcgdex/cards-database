import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-121",
	localId: 121,

	// Card informations
	name: {
		en: "Ilima",
		fr: "Althéo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/121/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/121/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/121/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/121/high.png",
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
			fr: "Chaque joueur mélange sa main avec son deck et lance une pièce. Si c'est face, ce joueur pioche 6 cartes. Si c'est pile, il pioche 3 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

