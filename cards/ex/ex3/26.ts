import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-26",
	localId: 26,

	// Card informations
	name: {
		en: "Dratini",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/26/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dragon Dew",
		},
		text: {
			en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 if there is only 1).",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tail Slap",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card

