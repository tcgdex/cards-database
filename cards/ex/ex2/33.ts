import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Breloom",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/33/high",
		},
	},

	evolveFrom: {
		en: "Shroomish",
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
			en: "Super Poison Breath",
		},
		text: {
			en: "Each Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Uppercut",
		},
		text: {
			en: "This attack's damage is not affected by Resistance.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
