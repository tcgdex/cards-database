import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-41",
	localId: 41,

	// Card informations
	name: {
		en: "Litwick",
		fr: "Funécire",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 607,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/41/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/41/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Trip Over",
			fr: "Croche-Pied",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
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

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
