import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-193",
	localId: 193,

	// Card informations
	name: {
		en: "Guzma & Hala",
		fr: "Guzma et Pectorius",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/193/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/193/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/193/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/193/high",
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
			fr: "Cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.\n\nLorsque vous jouez cette carte, vous pouvez défausser 2 autres cartes de votre main. Dans ce cas, vous pouvez également chercher une carte Outil Pokémon et une carte Énergie spéciale de cette façon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
