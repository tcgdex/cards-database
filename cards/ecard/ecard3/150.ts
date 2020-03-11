import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-150",
	localId: 150,

	// Card informations
	name: {
		en: "Kabutops",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/150/high",
		},
	},

	evolveFrom: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutop's type (color) becomes the same as that type of energy until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Draining Cut",
		},
		text: {
			en: "Remove a damage counter from Kabutops.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Triple Cutter",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
