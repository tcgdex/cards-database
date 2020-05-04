import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp5/83/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/83/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/83/high",
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
			fr: "Piochez 2 cartes.",
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
