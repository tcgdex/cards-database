import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-93",
	localId: 93,

	// Card informations
	name: {
		en: "Raikou & Suicune LEGEND",
		fr: "Raikou & Suicune LÉGENDE (bas)",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
		Type.WATER,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/93/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/93/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],





	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunderbolt Spear",
			fr: "Lance de tonnerre",
		},
		text: {
			en: "Raikou & Suicune LEGEND does 50 damage to itself, and don't apply Weakness to this damage.",
			fr: "Raikou & Suicune LÉGENDE s'infligent 50 dégâts. N'appliquez pas la Faiblesse à ces dégâts.",
		},
		damage: 150
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Gain",
			fr: "Puissance boréale",
		},
		text: {
			en: "Remove 5 damage counters from Raikou & Suicune LEGEND.",
			fr: "Retirez 5 marqueurs de dégât à Raikou & Suicune LÉGENDE.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
