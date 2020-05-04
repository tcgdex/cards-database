import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-113",
	localId: 113,

	// Card informations
	name: {
		en: "Rival",
		fr: "Rival",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/113/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/113/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Retournez les 5 cartes du dessus de votre deck. Votre adversaire choisit 3 de ces cartes. Placez ces cartes dans votre main et placez les 2 autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
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
