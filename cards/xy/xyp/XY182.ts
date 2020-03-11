import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY182",
	localId: "XY182",

	// Card informations
	name: {
		en: "Mandibuzz BREAK",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 630,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY182/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY182/high",
		},
	},

	evolveFrom: {
		en: "Mandibuzz",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wings of Disaster",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness and Resistance. Then, discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
