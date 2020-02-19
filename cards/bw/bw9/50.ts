import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-50",
	localId: 50,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/50/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/50/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/50/high.png",
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
			Type.COLORLESS
		],
		name: {
			en: "Calculate",
			fr: "Calcul",
		},
		text: {
			en: "Look at the top 4 cards of your deck and put them back on top of your deck in any order.",
			fr: "Regardez les 4 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

