import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-10",
	localId: 10,

	// Card informations
	name: {
		en: "Dark Steelix",
	},

	hp: 110,

	type: [
		Type.METAL,
		Type.DARKNESS,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/10/high",
		},
	},

	evolveFrom: {
		en: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Link",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Dark Steelix.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
