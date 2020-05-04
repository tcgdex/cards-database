import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "basep-18",
	localId: 18,

	// Card informations
	name: {
		en: "Team Rocket's Meowth",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kunihiko Yuyama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Comeback",
		},
		text: {
			en: "Flip a number of coins equal to the total number of Pokémon in play. This attack does 10 damage times the number of heads. Then, Team Rocket's Meowth does 10 damage times the number of tails to itself.",
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



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
