import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-14",
	localId: 14,

	// Card informations
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/14/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/14/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/14/high",
		},
	},

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Backward Belt Throw",
			fr: "Projection arrière",
		},
		text: {
			en: "You may do 80 damage plus 20 more damage. If you do, Hariyama does 20 damage to itself.",
			fr: "Vous pouvez infliger 80 dégâts plus 20 dégâts supplémentaires. Dans ce cas, Hariyama s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
