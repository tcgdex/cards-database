import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-63",
	localId: 63,

	// Card informations
	name: {
		en: "Misty's Water Command",
		fr: "Maîtrise Aquatique d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/63/high",
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
			fr: "Déplacez autant d’Énergies Water que vous le voulez de vos Pokémon vers vos Psykokwak, Hypotrempe, Stari, Staross-GX, Magicarpe, Léviator ou Lokhlass, de la manière que vous voulez.",
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
