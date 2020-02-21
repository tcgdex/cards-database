import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-44",
	localId: 44,

	// Card informations
	name: {
		en: "Holon's Castform",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/44/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Delta Draw",
		},
		text: {
			en: "Count the number of Pokémon you have in play that has δ on its card. Draw up to that many cards.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
