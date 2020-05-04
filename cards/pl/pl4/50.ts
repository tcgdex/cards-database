import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-50",
	localId: 50,

	// Card informations
	name: {
		en: "Wormadam Sandy Cloak",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/50/high",
		},
	},

	evolveFrom: {
		en: "Burmy Sandy Cloak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hang Down",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cloak Headbutt",
		},
		text: {
			en: "If you have Wormadam Trash Cloak in play, this attack does 60 damage plus 30 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
