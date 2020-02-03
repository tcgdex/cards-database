import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-56",
	localId: 56,

	// Card informations
	name: {
		en: "Sabrina's Hypno",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/56/high.png",
		},
	},

	evolveFrom: {
		en: "Drowzee",
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
			Type.PSYCHIC
		],
		name: {
			en: "Invigorate",
		},
		text: {
			en: "Choose 1 Basic Pokémon in any player's discard pile. Put it onto that player's Bench. Put a number of damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can't put a Pokémon on a Bench that's full.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Pendulum Curse",
		},
		text: {
			en: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 20 damage times the number of heads.",
		},
		damage: 20
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

