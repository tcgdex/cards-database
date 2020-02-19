import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-14",
	localId: 14,

	// Card informations
	name: {
		en: "Cloyster δ",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 91,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/14/high.png",
		},
	},

	evolveFrom: {
		en: "Shellder",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 75,
		type: AbilityType.POKEBODY,
		name: {
			en: "Solid Shell",
		},
		text: {
			en: "Prevent all of effects of attacks, including damage, done by your opponent's Pokémon to each of your Benched Pokémon that has δ on its card.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Grind",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Cloyster.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card

