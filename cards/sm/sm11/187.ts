import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-187",
	localId: 187,

	// Card informations
	name: {
		en: "Blizzard Town",
		fr: "Blizzarville",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/187/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/187/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/187/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/187/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon auxquels il reste 40 PV ou moins (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
