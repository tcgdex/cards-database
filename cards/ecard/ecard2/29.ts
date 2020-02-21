import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Primeape",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/29/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Karate Chop",
		},
		text: {
			en: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sudden Charge",
		},
		text: {
			en: "Primeape does 10 damage to itself. Then, switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
