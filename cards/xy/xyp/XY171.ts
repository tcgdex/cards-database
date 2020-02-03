import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY171",
	localId: "XY171",

	// Card informations
	name: {
		en: "M Salamence-EX",
	},

	hp: 230,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY171/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY171/high.png",
		},
	},

	evolveFrom: {
		en: "Salamence-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Savage Wing",
		},
		text: {
			en: "Discard as many basic Fire Energy attached to this Pokémon as you like. This attack does 40 more damage for each Energy card discarded in this way.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

