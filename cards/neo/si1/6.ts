import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "si1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Raticate",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/6/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Keiko Fukuyama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Teeth",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage; if tails, this attack does 10 damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
