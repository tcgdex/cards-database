import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-2",
	localId: 2,

	// Card informations
	name: {
		en: "Cradily δ",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
		Type.METAL,
	],

	dexId: 346,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/2/high",
		},
	},

	evolveFrom: {
		en: "Lileep",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Harsh Fluid",
		},
		text: {
			en: "Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Tentacles",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
