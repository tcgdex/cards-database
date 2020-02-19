import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-184",
	localId: 184,

	// Card informations
	name: {
		en: "Red's Challenge",
		fr: "Défi de Red",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/184/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/184/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/184/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/184/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

