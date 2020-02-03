import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-102",
	localId: 102,

	// Card informations
	name: {
		en: "Poipole",
		fr: "Vémini",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 803,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/102/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/102/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/102/high.png",
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
			en: "Belt",
			fr: "Taloche",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Last Scene",
			fr: "Dernière Scène",
		},
		text: {
			en: "If each player has exactly 1 Prize card remaining, this attack does 130 more damage.",
			fr: "S’il reste exactement une carte Récompense à chaque joueur, cette attaque inflige 130 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
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

