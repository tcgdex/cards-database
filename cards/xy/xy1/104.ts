import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-104",
	localId: 104,

	// Card informations
	name: {
		en: "Skitty",
		fr: "Skitty",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 300,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/104/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/104/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heal Bell",
			fr: "Glas de Soin",
		},
		text: {
			en: "Heal 10 damage from each of your Pokémon.",
			fr: "Soignez 10 dégâts à chacun de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
