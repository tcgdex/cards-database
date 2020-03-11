import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY166",
	localId: "XY166",

	// Card informations
	name: {
		en: "M Gengar-EX",
	},

	hp: 210,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY166/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY166/high",
		},
	},

	evolveFrom: {
		en: "Gengar-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hollow Geist",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned and Confused.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
