import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-56",
	localId: 56,

	// Card informations
	name: {
		en: "Tentacool",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 701,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cowardice",
		},
		text: {
			en: "At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can't be used the turn you put Tentacool into play or if Tentacool is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Acid",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
