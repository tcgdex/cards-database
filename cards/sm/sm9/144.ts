import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-144",
	localId: 144,

	// Card informations
	name: {
		en: "Ingo & Emmet",
		fr: "Chammal et Chamsin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/144/high",
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
			fr: "Regardez la carte du dessus de votre deck, puis choisissez l’une de ces options :\n\n• Défaussez votre main et piochez 5 cartes.\n• Défaussez votre main et piochez 5 cartes du dessous de votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
