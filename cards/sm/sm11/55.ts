import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-55",
	localId: 55,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Meal Time",
			fr: "À Belles Dents",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, draw a card.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, piochez une carte.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
