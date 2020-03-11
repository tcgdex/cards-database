import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-125",
	localId: 125,

	// Card informations
	name: {
		en: "Team Plasma Grunt",
		fr: "Sbire de la Team Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/125/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/125/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/125/high",
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
			fr: "Défaussez une carte de la Team Plasma de votre main. (Si vous ne pouvez pas défausser une carte de la Team Plasma, vous ne pouvez pas jouer cette carte.) Piochez 4 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
