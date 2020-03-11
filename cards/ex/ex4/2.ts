import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Team Aqua's Crawdaunt",
	},

	hp: 80,

	type: [
		Type.WATER,
		Type.DARKNESS,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Nakaoka",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Reverse",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses which Defending Pokémon to switch.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Deep Impact",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
