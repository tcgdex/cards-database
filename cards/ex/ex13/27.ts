import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-27",
	localId: 27,

	// Card informations
	name: {
		en: "Regice",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 378,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 8,
		type: AbilityType.POKEBODY,
		name: {
			en: "Clear Body",
		},
		text: {
			en: "Regice can't be affected by any Special Conditions.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
