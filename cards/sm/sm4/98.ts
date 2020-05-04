import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Psychic Memory",
		fr: "ROM Psy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Psychic.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
