import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-3",
	localId: 3,

	// Card informations
	name: {
		en: "Breloom",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/3/high.png",
		},
	},

	evolveFrom: {
		en: "Shroomish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leaf Poison",
		},
		text: {
			en: "If Breloom has any Grass Energy attached to it, the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hustle Punch",
		},
		text: {
			en: "During your next turn, Hustle Punch attack's base damage is 50 instead of 70.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

