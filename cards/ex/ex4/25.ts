import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-25",
	localId: 25,

	// Card informations
	name: {
		en: "Team Aqua's Carvanha",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 88,
		name: "Mt. TBT"
	},

	abilities: [{
		id: 306,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Lift",
		},
		text: {
			en: "If Team Aqua's Carvanha has any Darkness Energy attached to it, the Retreat Cost for Team Aqua's Carvanha is 0.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slow-Acting Poison",
		},
		text: {
			en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
