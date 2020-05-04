import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-40",
	localId: 40,

	// Card informations
	name: {
		en: "Noctowl",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/40/high",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 973,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Investigate",
		},
		text: {
			en: "Once during your turn (before you attack) you may look at the top 2 cards of any player's deck or at to up 2 of any player's Prizes. Put any cards you looked at back in the same order. This power can't be used if Noctowl is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Smash",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage plus 10 more damage for each heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
