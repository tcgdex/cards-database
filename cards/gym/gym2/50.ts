import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-50",
	localId: 50,

	// Card informations
	name: {
		en: "Koga's Weezing",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/50/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Spontaneous Explosion",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage and Koga's Weezing does 30 damage to itself; if tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Cloud",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
