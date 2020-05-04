import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Mantine",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 226,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 535,
		type: AbilityType.POKEBODY,
		name: {
			en: "Jumbo Fin",
		},
		text: {
			en: "If Mantyke is anywhere under Mantine, the Retreat Cost for each of your Water Pokémon is ColorlessColorless less.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Giant Wave",
		},
		text: {
			en: "Mantine can't use Giant Wave during your next turn.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
