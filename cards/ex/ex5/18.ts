import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-18",
	localId: 18,

	// Card informations
	name: {
		en: "Gorebyss",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 368,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/18/high",
		},
	},

	evolveFrom: {
		en: "Clamperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stun Needle",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mystic Water",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Psychic Energy in play.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
