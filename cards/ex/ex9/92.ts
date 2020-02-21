import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-92",
	localId: 92,

	// Card informations
	name: {
		en: "Camerupt ex",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/92/high",
		},
	},

	evolveFrom: {
		en: "Numel",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 99,
		type: AbilityType.POKEBODY,
		name: {
			en: "Magma Armor",
		},
		text: {
			en: "Camerupt ex can't be Asleep or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Eruption",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 60 damage plus 20 more damage for each Energy card discarded in this way.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
