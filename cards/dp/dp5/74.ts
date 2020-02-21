import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-74",
	localId: 74,

	// Card informations
	name: {
		en: "Spearow",
		fr: "Piafabec",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 21,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/74/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/74/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-aile",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw",
			fr: "Mâchoire",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
