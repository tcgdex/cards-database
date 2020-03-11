import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-112",
	localId: 112,

	// Card informations
	name: {
		en: "Team Rocket's Handiwork",
		fr: "Méfaits de la Team Rocket",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
