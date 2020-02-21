import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-11",
	localId: 11,

	// Card informations
	name: {
		en: "Smeargle",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sketch",
		},
		text: {
			en: "If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
