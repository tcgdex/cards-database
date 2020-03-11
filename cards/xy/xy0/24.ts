import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-24",
	localId: 24,

	// Card informations
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 684,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
