import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Pokédex HANDY910is",
		fr: "Pokédex HANDY910is",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/114/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/114/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/114/high",
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
			fr: "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez l'autre carte au dessous de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
