import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Slowbro",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/33/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 479,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dense Body",
		},
		text: {
			en: "Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Energy Cannon",
		},
		text: {
			en: "This attack does 30 damage plus 10 more damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way. y.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
