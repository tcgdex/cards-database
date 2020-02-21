import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Team Magma's Baltoy",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 159,
		name: "Atsuko Ujiie"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psymist",
		},
		text: {
			en: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and put 1 damage counter on that Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Pain Amplifier",
		},
		text: {
			en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
