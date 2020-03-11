import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/62/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/62/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/62/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Seaking.",
			fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissoroy.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Horn Drill",
			fr: "Empal'korne",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
