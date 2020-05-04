import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Wobbuffet",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 415,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mirror Coat",
		},
		text: {
			en: "If Wobbuffet becomes Poisoned or Burned by the Defending Pokémon's attack during your opponent's turn, the Defending Pokémon becomes affected by the same Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Return Attack",
		},
		text: {
			en: "Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
