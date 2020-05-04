import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-27",
	localId: 27,

	// Card informations
	name: {
		en: "Sandslash δ",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
		Type.METAL,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/27/high",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 854,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Storm",
		},
		text: {
			en: "As long as Sandslash is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rend",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
