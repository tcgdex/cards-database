import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-109",
	localId: 109,

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Extra Chop",
			fr: "Tranch'Extra",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
