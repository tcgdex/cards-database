import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY135",
	localId: "XY135",

	// Card informations
	name: {
		en: "Beheeyem BREAK",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 606,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY135/high",
		},
	},

	evolveFrom: {
		en: "Beheeyem",
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
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Cosmic Circle",
		},
		text: {
			en: "Move as many Psychic Energy attached to your Pokémon to your other Pokémon in any way you like.",
		},
		damage: 100
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
