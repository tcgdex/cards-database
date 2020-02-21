import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-68",
	localId: 68,

	// Card informations
	name: {
		en: "Nincada",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 290,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		name: {
			en: "Leech Life",
		},
		text: {
			en: "After your attack, remove from Nincada the number of damage counters equal to the damage you did to the Defending Pokémon. If Nincada has fewer damage counters than that, remove all of them.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
