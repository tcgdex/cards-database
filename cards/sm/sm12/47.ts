import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-47",
	localId: 47,

	// Card informations
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 361,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/47/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/47/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/47/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Continuous Headbutt",
			fr: "Coup d’Boule Sans Fin",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

