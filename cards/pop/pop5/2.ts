import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-2",
	localId: 2,

	// Card informations
	name: {
		en: "Lugia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/2/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerowing",
		},
		text: {
			en: "Before doing damage, you may flip a coin. If tails, this attack does nothing. If heads, this attack does 60 damage instead.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card

