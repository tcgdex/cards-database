import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-20",
	localId: 20,

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
			en: "https://assets.tcgdex.net/en/base/base6/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/20/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twineedle",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
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
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
