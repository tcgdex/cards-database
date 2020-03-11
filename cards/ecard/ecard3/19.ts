import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Magneton",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/19/high",
		},
	},

	evolveFrom: {
		en: "Magnemite",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1309,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Attract Energy",
		},
		text: {
			en: "When you play Magneton from your hand to evolve 1 of your Pokémon, you may move any number of basic Energy cards attached to your other Pokémon to Magneton.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Blast",
		},
		text: {
			en: "You may discard all Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent's Benched Pokémon in the way you like. (For example, if you discard 3 Energy cards, you can put 1 damage counter on 1 of your opponent's Benched Pokémon and 2 on another.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
