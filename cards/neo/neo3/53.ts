import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Slugma",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 218,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Magma Ring",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
