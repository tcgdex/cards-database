import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-51",
	localId: 51,

	// Card informations
	name: {
		en: "Pupitar δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/51/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Gaze",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Pupitar does 10 damage to itself.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
