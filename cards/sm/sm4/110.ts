import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-110",
	localId: 110,

	// Card informations
	name: {
		en: "Lusamine",
		fr: "Elsa-Mina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/110/high",
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
			fr: "Placez une combinaison de 2 cartes Supporter et cartes Stade de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
