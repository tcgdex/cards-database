import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-15",
	localId: 15,

	// Card informations
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 22,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/15/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/15/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/15/high",
		},
	},

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
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
			en: "Wing Attack",
			fr: "Cru-aile",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Repeating Drill",
			fr: "Multivrille",
		},
		text: {
			en: "Flip 5 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 5 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
