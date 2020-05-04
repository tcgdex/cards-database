import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-41",
	localId: 41,

	// Card informations
	name: {
		en: "Dodrio",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/41/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 18,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Retreat Aid",
		},
		text: {
			en: "As long as Dodrio is Benched, pay 1 Colorless less to retreat your Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on Dodrio.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
