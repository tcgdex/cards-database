import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-39",
	localId: 39,

	// Card informations
	name: {
		en: "Nuzleaf",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/39/high",
		},
	},

	evolveFrom: {
		en: "Seedot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Self Charge",
		},
		text: {
			en: "Attach a Darkness Energy card from your hand to Nuzleaf.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
