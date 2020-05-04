import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Amaura",
		fr: "Amagara",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 698,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
