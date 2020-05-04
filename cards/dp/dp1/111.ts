import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp1/111/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/111/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Placez l'autre carte au dessous de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
