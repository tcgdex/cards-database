import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Double Aqua Energy",
		fr: "Double Énergie Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon de la Team Aqua. Défaussez cette carte à la fin du tour pendant lequel vous l'avez attachée.\n\nCette carte ne fournit de l'Énergie WaterWater que pendant qu'elle est attachée à un Pokémon de la Team Aqua.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon de la Team Aqua, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
