import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-59",
	localId: 59,

	// Card informations
	name: {
		en: "Magneton",
		fr: "Magnéton",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/59/high",
		},
	},

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yumi",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tri Attack",
			fr: "Triplattaque",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
