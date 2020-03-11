import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-61",
	localId: 61,

	// Card informations
	name: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 769,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Absorb Life",
			fr: "Absorption",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
