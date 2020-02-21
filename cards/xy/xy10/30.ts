import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-30",
	localId: 30,

	// Card informations
	name: {
		en: "Spoink",
		fr: "Spoink",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 325,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Rocket Jump",
			fr: "Saut Propulsé",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
