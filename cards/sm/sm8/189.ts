import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-189",
	localId: 189,

	// Card informations
	name: {
		en: "Sightseer",
		fr: "Vacancière",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/189/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/189/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/189/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/189/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 5 cartes en main. Si vous ne pouvez pas piocher de carte de cette façon, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
