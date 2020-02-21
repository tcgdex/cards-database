import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-100",
	localId: 100,

	// Card informations
	name: {
		en: "Flareon Star",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 304,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Crimson Ray",
		},
		text: {
			en: "Once during your turn, when you put Flareon Star from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Burned.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
		},
		text: {
			en: "Discard a Fire Energy attached to Flareon Star.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
