import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-8",
	localId: 8,

	// Card informations
	name: {
		en: "Ninetales δ",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/8/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 67,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Volunteer",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 4 damage counters from Ninetales and discard Ninetales from Vulpix. If you do, search your deck for Ninetales or Ninetales ex and put it onto Vulpix (this counts as evolving Vulpix). Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trick Tail",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to 1 of your Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
