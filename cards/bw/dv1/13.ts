import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/13/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/13/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/13/high",
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
			Type.FIGHTING,
			Type.METAL
		],
		name: {
			en: "Lunge",
			fr: "Coup Rapide",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
