import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-113",
	localId: 113,

	// Card informations
	name: {
		en: "Gabite",
		fr: "Carmache",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/113/high",
		},
	},

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Scythe",
			fr: "Faucille Acérée",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
