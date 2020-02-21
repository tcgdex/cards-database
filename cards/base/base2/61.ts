import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Rhyhorn",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leer",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack Rhyhorn during your opponent's next turn. (Benching either Pokémon ends this effect.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
