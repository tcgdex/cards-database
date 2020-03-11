import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Salamence",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/19/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 111,
		type: AbilityType.POKEBODY,
		name: {
			en: "Intimidating Fang",
		},
		text: {
			en: "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Flame",
		},
		text: {
			en: "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
