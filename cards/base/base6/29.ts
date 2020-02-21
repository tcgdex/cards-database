import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-29",
	localId: 29,

	// Card informations
	name: {
		en: "Mewtwo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 165,
		name: "Christopher Rush"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Control",
		},
		text: {
			en: "Flip a coin. If heads, choose a basic Energy card attached to 1 of your opponent's Pokémon and attach it to another of your opponent's Pokémon of your choice.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Telekinesis",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
