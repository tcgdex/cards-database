import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-91",
	localId: 91,

	// Card informations
	name: {
		en: "Ralts",
		fr: "Tarsal",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 280,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yumi",



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
			fr: "Soignez 10 dégâts à ce Pokémon.",
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
