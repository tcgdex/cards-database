import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY191",
	localId: "XY191",

	// Card informations
	name: {
		en: "Keldeo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 647,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY191/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 116,
		type: AbilityType.TALENT,
		name: {
			en: "Justified",
		},
		text: {
			en: "This Pokémon's attacks do 50 more damage to your opponent's Darkness Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Sacred Sword",
		},
		text: {
			en: "This Pokémon can't use Sacred Sword during your next turn.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
