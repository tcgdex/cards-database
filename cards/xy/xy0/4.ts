import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-4",
	localId: 4,

	// Card informations
	name: {
		en: "Quilladin",
		fr: "Boguérisse",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 651,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/4/high",
		},
	},

	evolveFrom: {
		en: "Chespin",
		fr: "Marisson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Needle Arm",
			fr: "Poing Dard",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
