import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-66",
	localId: 66,

	// Card informations
	name: {
		en: "Natu",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 415,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mirror Coat",
		},
		text: {
			en: "If Natu is Burned or Poisoned by an opponent's attack (even if Natu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Razor Wind",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
