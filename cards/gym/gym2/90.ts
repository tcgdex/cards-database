import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Misty's Psyduck",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/90/high",
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
			Type.PSYCHIC
		],
		name: {
			en: "ESP",
		},
		text: {
			en: "Flip 3 coins. If exactly 1 is heads, draw a card. If exactly 2 are heads, this attack does 20 damage. If all 3 are heads, choose 1 of the Defending Pokémon's attacks. Misty's Psyduck copies that attack except for its Energy costs. (No matter what type the Defending Pokémon is, Misty's Psyduck's type is still .)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
