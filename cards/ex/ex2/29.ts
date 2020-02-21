import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Arbok",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/29/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 111,
		type: AbilityType.POKEBODY,
		name: {
			en: "Intimidating Fang",
		},
		text: {
			en: "As long as Arbok is your Active Pokémon, any damage to your Pokémon done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
