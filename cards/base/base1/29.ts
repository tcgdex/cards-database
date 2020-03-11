import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Haunter",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/29/high",
		},
	},

	evolveFrom: {
		en: "Gastly",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Keiji Kinebuchi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hypnosis",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Dream Eater",
		},
		text: {
			en: "You can't this attack unless the Defending Pokémon is Asleep.",
		},
		damage: 50
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
