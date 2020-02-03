import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY182/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY182/high.png",
		},
	},

	evolveFrom: {
		en: "Mandibuzz",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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

