import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Erika's Oddish",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 43,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/47/high",
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

	abilities: [{
		id: 702,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Photosynthesis",
		},
		text: {
			en: "All Energy cards attached to Erika's Oddish provide Grass Energy instead of their usual type. This power works even while Erika's Oddish is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Poisonpowder",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
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
