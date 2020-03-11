import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-22",
	localId: 22,

	// Card informations
	name: {
		en: "Ninetales",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/22/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Toshinao Aoki",

	abilities: [{
		id: 148,
		type: AbilityType.POKEBODY,
		name: {
			en: "Safeguard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Ninetales by your opponent's Pokémon-ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Will-o'-the-wisp",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
