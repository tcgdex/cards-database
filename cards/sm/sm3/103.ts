import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-103",
	localId: 103,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/103/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/103/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Code Check",
			fr: "Vérification de Codes",
		},
		text: {
			en: "Look at 1 of your opponent's face-down Prize cards.",
			fr: "Regardez l’une des cartes Récompense de votre adversaire (actuellement face cachée).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beam",
			fr: "Rayon",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

