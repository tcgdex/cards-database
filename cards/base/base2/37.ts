import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base2-37",
	localId: 37,

	// Card informations
	name: {
		en: "Gloom",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/37/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Keiji Kinebuchi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poisonpowder",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Foul Odor",
		},
		text: {
			en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
		},
		damage: 20
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
