import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-34",
	localId: 34,

	// Card informations
	name: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 536,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/34/high",
		},
	},

	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Frog Hop",
			fr: "Bond de Grenouille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
