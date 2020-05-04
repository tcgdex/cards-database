import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-80",
	localId: 80,

	// Card informations
	name: {
		en: "Dusk Ball",
		fr: "Sombre Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/80/high",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Choisissez-y 1 Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Replacez les cartes restantes au dessus de votre deck. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
