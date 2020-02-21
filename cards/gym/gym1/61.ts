import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-61",
	localId: 61,

	// Card informations
	name: {
		en: "Blaine's Charmander",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Kindle",
		},
		text: {
			en: "Discard 1 Energy card attached to Blaine's Charmander in order to use this attack. If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
