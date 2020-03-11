import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Team Aqua's Cacturne",
	},

	hp: 80,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "K. Utsunomiya",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Bind",
		},
		text: {
			en: "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed.\"",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Barb",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
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
