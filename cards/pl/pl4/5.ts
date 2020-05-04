import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-5",
	localId: 5,

	// Card informations
	name: {
		en: "Luxray",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/5/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Flash",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gadget Bolt",
		},
		text: {
			en: "If Luxray has a Pokémon Tool card attached to it, you may do 100 damage instead of 60 to the Defending Pokémon. If you do, discard that Pokémon Tool card.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
