import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Pokédex HANDY910is",
		fr: "Pokédex Handy910is",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/111/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/111/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/111/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Placez l'autre carte au dessous de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

