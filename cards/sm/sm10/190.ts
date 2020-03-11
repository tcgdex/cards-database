import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-190",
	localId: 190,

	// Card informations
	name: {
		en: "Triple Acceleration Energy",
		fr: "Énergie Triple Accélération",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/190/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/190/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/190/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/190/high",
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
			fr: "Cette carte ne peut être attachée qu’à un Pokémon Évolutif. Si cette carte est attachée à l’un de vos Pokémon, défaussez-la à la fin du tour.\n\nCette carte ne fournit de l’Énergie ColorlessColorlessColorless que lorsqu’elle est attachée à un Pokémon Évolutif.\n\nSi cette carte est attachée à autre chose qu’un Pokémon Évolutif, défaussez cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
