import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-105",
	localId: 105,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/105/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Single Lunge",
			fr: "Allongement Simple",
		},
		text: {
			en: "If this Pokémon has no damage counters on it, this attack does 90 more damage.",
			fr: "Si ce Pokémon n’a pas de marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Edge",
			fr: "Lame Puissante",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
