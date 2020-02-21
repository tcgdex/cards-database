import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



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
