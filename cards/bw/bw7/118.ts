import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-118",
	localId: 118,

	// Card informations
	name: {
		en: "Patrat",
		fr: "Ratentif",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 504,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/118/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/118/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/118/high",
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
			en: "Patrol",
			fr: "Patrouille",
		},
		text: {
			en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
			fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
