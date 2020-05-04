import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw9/50/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/50/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
