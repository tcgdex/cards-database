import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "np-21",
	localId: 21,

	// Card informations
	name: {
		en: "Jirachi",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/21/high",
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
			Type.COLORLESS
		],
		name: {
			en: "The Third Eye",
		},
		text: {
			en: "Discard an Energy card attached to Jirachi and draw 3 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psywave",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
