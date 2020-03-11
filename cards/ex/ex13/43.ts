import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-43",
	localId: 43,

	// Card informations
	name: {
		en: "Golduck δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/43/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 1094,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Block",
		},
		text: {
			en: "As long as any Stadium card with Holon in its name is in play, your opponent can't play any Stadium cards from his or her hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mind Play",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose. If that card is a Trainer card, this attack does 30 damage plus 30 more damage, and discard that card. If that card is not a Trainer card, return it to your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
