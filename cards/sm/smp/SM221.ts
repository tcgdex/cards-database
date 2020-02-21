import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM221",
	localId: "SM221",

	// Card informations
	name: {
		en: "Blacephalon",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 806,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM221/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM221/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Fireworks Bomb",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like. If your opponent has exactly 3 Prize cards remaining, put 12 damage counters on them instead.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
