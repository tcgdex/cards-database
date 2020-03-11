import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-18",
	localId: 18,

	// Card informations
	name: {
		en: "Steenee",
		fr: "Candine",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 762,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/18/high",
		},
	},

	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
