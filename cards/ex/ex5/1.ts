import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-1",
	localId: 1,

	// Card informations
	name: {
		en: "Banette",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/1/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shadow Steal",
		},
		text: {
			en: "Does 10 damage plus 20 more damage for each Special Energy card in your opponent's discard pile.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Chant",
		},
		text: {
			en: "Count the number of Basic Pokémon or Evolution cards in your discard pile. Put that many damage counters on the Defending Pokémon. You can't put more than 6 damage counters on the Defending Pokémon in this way.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
