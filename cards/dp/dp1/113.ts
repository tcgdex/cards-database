import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp1/113/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/113/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/113/high.png",
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
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Retournez les 5 cartes du dessus de votre deck. Votre adversaire choisit 3 de ces cartes. Placez ces cartes dans votre main et placez les 2 autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
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

