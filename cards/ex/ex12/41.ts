import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-41",
	localId: 41,

	// Card informations
	name: {
		en: "Nuzleaf",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/41/high",
		},
	},

	evolveFrom: {
		en: "Seedot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Katsura Tabata",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Plunder",
		},
		text: {
			en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
