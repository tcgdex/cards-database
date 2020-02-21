import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-112",
	localId: 112,

	// Card informations
	name: {
		en: "Professor Rowan",
		fr: "Prof. Sorbier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/112/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/112/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/112/high",
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
			fr: "Choisissez 1 carte de votre main et mélangez le reste de vos cartes à votre deck. Ensuite, piochez 4 cartes. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas jouer cette carte.)",
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
