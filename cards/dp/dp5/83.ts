import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-83",
	localId: 83,

	// Card informations
	name: {
		en: "Mom's Kindness",
		fr: "La gentillesse de Maman",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/83/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/83/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/83/high.png",
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
			fr: "Piochez 2 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

