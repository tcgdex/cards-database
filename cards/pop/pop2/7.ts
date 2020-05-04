import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Ivysaur",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 2,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/7/high",
		},
	},

	evolveFrom: {
		en: "Bulbasaur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Seed",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
