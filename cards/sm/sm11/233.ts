import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-233",
	localId: 233,

	// Card informations
	name: {
		en: "Coach Trainer",
		fr: "Dresseurs Coach",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/233/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/233/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/233/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/233/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "nagimiso",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Si votre Pokémon Actif est un Pokémon ESCOUADE, piochez 2 cartes supplémentaires.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
