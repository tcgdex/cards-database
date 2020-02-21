import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-32",
	localId: 32,

	// Card informations
	name: {
		en: "Corsola",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 222,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Coral Glow",
		},
		text: {
			en: "Draw a number of cards up to the number of your opponent's Basic Pokémon in play. (You can't have more than 10 cards in your hand in this way.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
