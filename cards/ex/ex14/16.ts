import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-16",
	localId: 16,

	// Card informations
	name: {
		en: "Combusken",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/16/high",
		},
	},

	evolveFrom: {
		en: "Torchic",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Focus Energy",
		},
		text: {
			en: "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
