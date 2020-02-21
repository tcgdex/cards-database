import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 705,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/95/high",
		},
	},

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
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
			en: "Division",
			fr: "Division",
		},
		text: {
			en: "Search your deck for up to 2 Sliggoo and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Colimucus dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.FAIRY
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
