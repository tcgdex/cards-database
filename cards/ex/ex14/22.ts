import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-22",
	localId: 22,

	// Card informations
	name: {
		en: "Kingler δ",
	},

	hp: 80,

	type: [
		Type.FIRE,
		Type.METAL,
	],

	dexId: 99,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/22/high.png",
		},
	},

	evolveFrom: {
		en: "Krabby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prop-up Pinchers",
		},
		text: {
			en: "If Kingler has a Pokémon Tool card attached to it, this attack does 40 damage plus 40 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card

