import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Brock's Sandslash",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/23/high",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
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
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Needles",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Sandstorm",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
