import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base2-48",
	localId: 48,

	// Card informations
	name: {
		en: "Weepinbell",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 70,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/48/high",
		},
	},

	evolveFrom: {
		en: "Bellsprout",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poisonpowder",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
