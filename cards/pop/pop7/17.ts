import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-17",
	localId: 17,

	// Card informations
	name: {
		en: "Spinda",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 327,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dish Out",
		},
		text: {
			en: "Draw a card from the top and the bottom of your deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Synchro Punch",
		},
		text: {
			en: "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
