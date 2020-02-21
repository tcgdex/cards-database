import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Weezing",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/24/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
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
			Type.GRASS
		],
		name: {
			en: "Confusion Gas",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Smog",
		},
		text: {
			en: "Each Defending Pokémon is now Poisoned. Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
