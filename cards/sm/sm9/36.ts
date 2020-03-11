import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm9/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/36/high",
		},
	},

	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Misa Tsutsui",



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
