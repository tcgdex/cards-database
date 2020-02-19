import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-84",
	localId: 84,

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
			en: "https://assets.tcgdex.net/en/xy/xy3/84/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/84/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Safety Check",
			fr: "Contrôle de Sécurité",
		},
		text: {
			en: "Look at 1 of your face-down Prize cards.",
			fr: "Regardez l'une de vos cartes Récompense face cachée.",
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
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

