import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-119",
	localId: 119,

	// Card informations
	name: {
		en: "Bebe's Search",
		fr: "La recherche d'Amelle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/119/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/119/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/119/high",
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
			fr: "Choisissez une carte de votre main et placez-la au dessus de votre deck. Choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas la jouer.)",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
