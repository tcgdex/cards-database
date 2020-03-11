import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-33",
	localId: 33,

	// Card informations
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "This attack does 10 damage times the number of damage counters on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
