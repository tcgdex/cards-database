import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Mew",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 182,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Barrier",
		},
		text: {
			en: "As long as Mew has any React Energy cards attached to it, prevent all effects, excluding damage, done to Mew by attacks from your opponent's Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyshock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
