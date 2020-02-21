import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Beedrill",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/18/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Triple Poison",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters instead of 1 after each player's turn (even if it was already Poisoned).",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 times the number of heads.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
