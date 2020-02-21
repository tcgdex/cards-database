import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Sabrina's Golduck",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/30/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
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
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Damage Shift",
		},
		text: {
			en: "Move 1 damage counter from each of your Pokémon that has any on it to the Defending Pokémon. (Don't apply Weakness and Resistance.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Spray",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
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
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
