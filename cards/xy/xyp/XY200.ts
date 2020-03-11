import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY200",
	localId: "XY200",

	// Card informations
	name: {
		en: "M Sharpedo-EX",
	},

	hp: 210,

	type: [
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY200/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY200/high",
		},
	},

	evolveFrom: {
		en: "Sharpedo-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Torpedo Dive",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Benched Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
