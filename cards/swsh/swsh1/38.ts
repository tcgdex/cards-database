import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/38/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/38/low",
		}
	},

	evolveTo: [{
		en: "Centiskorch",
		fr: "Scolocendre",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Relentless Flames",
			fr: "Flammes Incessantes",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
		},
		damage: "40×"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
