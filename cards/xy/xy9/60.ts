import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-60",
	localId: 60,

	// Card informations
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 679,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Stab",
			fr: "Blessure",
		},
		text: {
			en: "Put 1 damage counter on your opponent's Active Pokémon.",
			fr: "Placez 1 marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
