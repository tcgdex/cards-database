import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Combusken",
		fr: "Galifeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/45/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/45/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/45/high",
		},
	},

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-feu",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied voltige",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
