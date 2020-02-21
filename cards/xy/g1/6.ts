import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Paras",
		fr: "Paras",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 46,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/6/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/6/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Blot",
			fr: "Pâté",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
