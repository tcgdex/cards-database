import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Magby",
	},

	hp: 30,

	type: [
		Type.FIRE,
	],

	dexId: 240,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
		},
		text: {
			en: "As long as Magby is Asleep, prevent all damage done to Magby by attacks.",
		}
	}],

	attacks: [{
		name: {
			en: "Play with Fire",
		},
		text: {
			en: "The Defending Pokémon is now Burned. Magby is now Asleep.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
