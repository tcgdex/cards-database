import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Amaura",
		fr: "Amagara",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 698,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
