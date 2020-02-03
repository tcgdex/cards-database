import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-38",
	localId: 38,

	// Card informations
	name: {
		en: "Kabuto",
		fr: "Kabuto",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/38/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/38/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/38/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

