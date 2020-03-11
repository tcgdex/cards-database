import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Delcatty",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/29/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Call",
		},
		text: {
			en: "Attach 1 Energy card from your discard pile to your Active Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cannonball",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to Delcatty but not used to pay for this attack's Energy cost.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
