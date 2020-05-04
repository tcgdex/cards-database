import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-10",
	localId: 10,

	// Card informations
	name: {
		en: "Quilladin",
		fr: "Boguérisse",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 651,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/10/high",
		},
	},

	evolveFrom: {
		en: "Chespin",
		fr: "Marisson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
		},
		text: {
			en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
