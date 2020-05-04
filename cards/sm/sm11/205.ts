import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-205",
	localId: 205,

	// Card informations
	name: {
		en: "Pokémon Research Lab",
		fr: "Laboratoire Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/205/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/205/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/205/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/205/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "aky CG Works",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher dans son deck jusqu’à 2 Pokémon qui évoluent de Fossile Inconnu, les placer sur son Banc, puis mélanger son deck. Si un joueur cherche son deck de cette façon, son tour se termine.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
