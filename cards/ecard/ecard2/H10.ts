import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H10",
	localId: "H10",

	// Card informations
	name: {
		en: "Exeggutor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H10/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Super Eggsplosion",
		},
		text: {
			en: "Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Called Shot",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage times the amount of Energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokémon)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
