import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM177",
	localId: "SM177",

	// Card informations
	name: {
		en: "Meltan",
		fr: "Meltan",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 808,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM177/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM177/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM177/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM177/high.png",
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



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Multiply",
			fr: "Multiplication",
		},
		text: {
			en: "Search your deck for Meltan and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez Meltan dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beam",
			fr: "Rayon",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

