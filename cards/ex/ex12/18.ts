import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-18",
	localId: 18,

	// Card informations
	name: {
		en: "Huntail",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 367,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/18/high",
		},
	},

	evolveFrom: {
		en: "Clamperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 228,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Reactive Generator",
		},
		text: {
			en: "Once during your turn (before your attack), if Huntail has no React Energy cards attached to it, you may search your deck for a React Energy card and attach it to Huntail. Shuffle your deck afterward. This power can't be used if Huntail is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Off",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
