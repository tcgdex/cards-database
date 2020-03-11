import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Team Aqua's Walrein",
	},

	hp: 120,

	type: [
		Type.WATER,
		Type.DARKNESS,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Ikuji",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Power Blow",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Team Aqua's Walrein.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Reverse",
		},
		text: {
			en: "You may return any number of basic Water Energy cards attached to all of your Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.METAL,
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
