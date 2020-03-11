import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-20",
	localId: 20,

	// Card informations
	name: {
		en: "Blaziken",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/20/high",
		},
	},

	evolveFrom: {
		en: "Combusken",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hiromichi Sugiyama",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Combustion",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Blaze Kick",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, the Defending Pokémon is now Burned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
