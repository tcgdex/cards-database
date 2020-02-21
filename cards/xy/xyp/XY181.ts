import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY181",
	localId: "XY181",

	// Card informations
	name: {
		en: "Crobat BREAK",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY181/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY181/high",
		},
	},

	evolveFrom: {
		en: "Crobat",
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
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Silent Bite",
		},
		text: {
			en: "You may leave your opponent's Active Pokémon Paralyzed. If you do, shuffle this Pokémon and all cards attached to it into your deck.",
		},
		damage: 60
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
