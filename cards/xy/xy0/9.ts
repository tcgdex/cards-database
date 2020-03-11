import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-9",
	localId: 9,

	// Card informations
	name: {
		en: "Braixen",
		fr: "Roussil",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 654,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/9/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/9/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/9/high",
		},
	},

	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-Feu",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
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
