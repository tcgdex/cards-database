import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-7",
	localId: 7,

	// Card informations
	name: {
		en: "Chespin",
		fr: "Marisson",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 650,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/7/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/7/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/7/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nosh",
			fr: "Casse-Croûte",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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

