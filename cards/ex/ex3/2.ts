import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Altaria",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/2/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Dance",
		},
		text: {
			en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 40 more damage (before applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Song",
		},
		text: {
			en: "Each Defending Pokémon is now Asleep.",
		},
		damage: 30
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



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
