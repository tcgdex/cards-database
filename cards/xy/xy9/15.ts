import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-15",
	localId: 15,

	// Card informations
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 631,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Reinforced Flame",
			fr: "Flamme Renforcée",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 20 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
