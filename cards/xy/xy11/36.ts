import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-36",
	localId: 36,

	// Card informations
	name: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 712,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/36/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/36/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Block",
			fr: "Bloc de Glace",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
