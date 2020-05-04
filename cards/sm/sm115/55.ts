import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-55",
	localId: 55,

	// Card informations
	name: {
		en: "Brock's Training",
		fr: "Entraînement de Pierre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "TOKIYA",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une carte Énergie de votre main à l’un de vos Racaillou, Gravalanch, Grolem, Onix-GX, Osselait, Rhinocorne, Rhinoféros ou Simularbre.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
