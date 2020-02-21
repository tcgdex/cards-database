import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-124",
	localId: 124,

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
			en: "https://assets.tcgdex.net/en/xy/xy8/124/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/124/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



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
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
