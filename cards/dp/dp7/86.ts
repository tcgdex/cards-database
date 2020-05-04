import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-86",
	localId: 86,

	// Card informations
	name: {
		en: "Luxury Ball",
		fr: "Luxury Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/86/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/86/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/86/high",
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
			fr: "Choisissez un Pokémon dans votre deck (Pokémon NIV.X exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Si Luxe Ball se trouve dans votre pile de défausse, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
