import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Dunsparce",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/53/high",
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
		id: 975,
		type: AbilityType.POKEBODY,
		name: {
			en: "Slippery Skin",
		},
		text: {
			en: "As long as the Defending Pokémon is an Evolved Pokémon, Dunsparce's Retreat Cost is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Shake",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
