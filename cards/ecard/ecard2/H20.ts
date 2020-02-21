import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H20",
	localId: "H20",

	// Card informations
	name: {
		en: "Octillery",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H20/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1081,
		type: AbilityType.POKEBODY,
		name: {
			en: "Suction Cups",
		},
		text: {
			en: "As long as Octillery is your Active Pokémon, whenever the Defending Pokémon retreats, discard all Energy cards attached to the Defending Pokémon when it goes to the Bench.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smokescreen",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
