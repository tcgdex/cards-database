import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-59",
	localId: 59,

	// Card informations
	name: {
		en: "Gligar",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Irongrip",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Stinger",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
