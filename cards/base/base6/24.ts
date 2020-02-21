import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-24",
	localId: 24,

	// Card informations
	name: {
		en: "Golem",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/24/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Avalanche",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Selfdestruct",
		},
		text: {
			en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Golem does 100 damage to itself.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
