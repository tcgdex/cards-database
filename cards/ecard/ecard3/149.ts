import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-149",
	localId: 149,

	// Card informations
	name: {
		en: "Ho-oh",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/149/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/149/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Fire, Water, or Lightning basic Energy card from your hand to Ho-oh, Ho-oh's type (color) becomes the same as that type of energy until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.FIRE
		],
		name: {
			en: "Holy Flame",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Scalding Steam",
		},
		text: {
			en: "Discard an Energy card attached to Ho-oh and flip a coin. If heads, the Defending Pokémon is now Burned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card

