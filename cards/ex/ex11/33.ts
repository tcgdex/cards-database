import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-33",
	localId: 33,

	// Card informations
	name: {
		en: "Weezing",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/33/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 42,
		type: AbilityType.POKEBODY,
		name: {
			en: "Body Odor",
		},
		text: {
			en: "As long as Weezing is the Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Bodies between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Mist Attack",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Whirlpool",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
