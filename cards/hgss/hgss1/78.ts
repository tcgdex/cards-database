import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-78",
	localId: 78,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/78/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/78/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
			fr: "Coud’keu",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
