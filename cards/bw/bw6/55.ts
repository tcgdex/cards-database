import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-55",
	localId: 55,

	// Card informations
	name: {
		en: "Gothita",
		fr: "Scrutella",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 574,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/55/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/55/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/55/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
			fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "��2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

