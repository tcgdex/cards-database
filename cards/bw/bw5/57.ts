import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-57",
	localId: 57,

	// Card informations
	name: {
		en: "Excadrill",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 530,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/57/high",
		},
	},

	evolveFrom: {
		en: "Drilbur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reinforced Drill",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Claw",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
