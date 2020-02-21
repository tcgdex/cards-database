import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-122",
	localId: 122,

	// Card informations
	name: {
		en: "Professor Oak's Visit",
		fr: "La visite du Prof. Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/122/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/122/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/122/high",
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
			fr: "Piochez 3 cartes. Ensuite, choisissez une carte de votre main et placez-la au dessous de votre deck.",
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
