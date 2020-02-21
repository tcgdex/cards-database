import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Kabuto",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/39/high",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
		},
		text: {
			en: "Any damage done to Kabuto by attacks is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Team Assembly",
		},
		text: {
			en: "Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
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
