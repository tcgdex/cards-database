import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-2",
	localId: 2,

	// Card informations
	name: {
		en: "Ariados",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/2/high",
		},
	},

	evolveFrom: {
		en: "Spinarak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reactive Poison",
		},
		text: {
			en: "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spider Trap",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, the new Defending Pokémon is now Asleep and Poisoned. Your opponent chooses the Defending Pokémon to switch.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
