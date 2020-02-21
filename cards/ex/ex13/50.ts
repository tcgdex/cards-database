import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-50",
	localId: 50,

	// Card informations
	name: {
		en: "Primeape δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/50/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
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
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 damage plus 30 more damage. Discard that Stadium card.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flames of Rage",
		},
		text: {
			en: "Discard 2 Energy attached to Primeape. This attack does 10 damage plus 20 more damage for each damage counter on Primeape.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
