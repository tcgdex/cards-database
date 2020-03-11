import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-178",
	localId: 178,

	// Card informations
	name: {
		en: "Lt. Surge's Strategy",
		fr: "Stratégie de Major Bob",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/178/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/178/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/178/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/178/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que s’il vous reste plus de cartes Récompense qu’à votre adversaire.\n\nPendant ce tour, vous pouvez jouer 3 cartes Supporter (y compris cette carte).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
