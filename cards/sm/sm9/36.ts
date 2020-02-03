import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-36",
	localId: 36,

	// Card informations
	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/36/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/36/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/36/high.png",
		},
	},

	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electroslug",
			fr: "Électro Frappe",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

