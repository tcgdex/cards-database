import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-205",
	localId: 205,

	// Card informations
	name: {
		en: "Roxie",
		fr: "Strykna",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/205/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/205/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/205/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/205/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez jusqu’à 2 Pokémon qui ne sont pas des Pokémon-GX ou des Pokémon-EX de votre main. Piochez 3 cartes pour chaque carte défaussée de cette façon.",
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
