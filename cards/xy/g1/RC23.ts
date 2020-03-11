import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC23",
	localId: "RC23",

	// Card informations
	name: {
		en: "Swablu",
		fr: "Tylton",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 333,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC23/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC23/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bind Wound",
			fr: "Blessure Pansée",
		},
		text: {
			en: "Heal 20 damage from 1 of your Pokémon.",
			fr: "Soignez 20 dégâts à l'un de vos Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
