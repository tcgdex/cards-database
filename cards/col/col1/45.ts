import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Jolteon",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/45/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Agility",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Jolteon during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mach Bolt",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
