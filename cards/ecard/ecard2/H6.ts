import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H6",
	localId: "H6",

	// Card informations
	name: {
		en: "Blissey",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H6/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 800,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Happy Healing",
		},
		text: {
			en: "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Bomber",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
