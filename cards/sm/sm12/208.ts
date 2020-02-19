import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-208",
	localId: 208,

	// Card informations
	name: {
		en: "Will",
		fr: "Clément",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/208/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/208/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/208/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/208/high.png",
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
			fr: "La prochaine fois que vous lancez des pièces en raison de l’effet d’une attaque, d’un talent ou d’une carte Dresseur pendant ce tour, choisissez pile ou face pour le premier lancer de pièce.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

