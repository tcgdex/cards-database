import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 694,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/29/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/29/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
