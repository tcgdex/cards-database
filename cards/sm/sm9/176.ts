import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-176",
	localId: 176,

	// Card informations
	name: {
		en: "Ingo & Emmet",
		fr: "Chammal et Chamsin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/176/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/176/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/176/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/176/high",
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
			fr: "Regardez la carte du dessus de votre deck, puis choisissez l’une de ces options :\n\n• Défaussez votre main et piochez 5 cartes.\n• Défaussez votre main et piochez 5 cartes du dessous de votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
