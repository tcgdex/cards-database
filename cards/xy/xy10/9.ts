import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-9",
	localId: 9,

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/9/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/9/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flying Flare",
			fr: "Flamboiement Volant",
		},
		text: {
			en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
