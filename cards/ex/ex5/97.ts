import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-97",
	localId: 97,

	// Card informations
	name: {
		en: "Regice ex",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 378,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 266,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Body",
		},
		text: {
			en: "Prevent all effects of attacks, except damage, done to Regice ex by the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Freeze Lock",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokémon during his or her next turn.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
