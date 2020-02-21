import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-43",
	localId: 43,

	// Card informations
	name: {
		en: "Erika's Exeggcute",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 102,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Deflector",
		},
		text: {
			en: "During your opponent's next turn, whenever Erika's Exeggcute takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Egg Bomb",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing to the Defending Pokémon and Erika's Exeggcute does 20 damage to itself.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
