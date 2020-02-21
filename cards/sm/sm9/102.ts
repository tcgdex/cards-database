import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-102",
	localId: 102,

	// Card informations
	name: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 597,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/102/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/102/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Continuous Tumble",
			fr: "Roulade Continue",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
