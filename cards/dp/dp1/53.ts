import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/53/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/53/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/53/high",
		},
	},

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Karate Chop",
			fr: "Poing-Karaté",
		},
		text: {
			en: "Does 40 damage minus 10 damage for each damage counter on Machoke.",
			fr: "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Machopeur.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
