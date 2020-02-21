import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY196",
	localId: "XY196",

	// Card informations
	name: {
		en: "Genesect",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY196/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY196/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Linear Attack",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Destructor Beam",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
