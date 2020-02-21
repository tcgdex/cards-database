import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-46",
	localId: 46,

	// Card informations
	name: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/46/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/46/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/46/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud'korne",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
			fr: "Coup rapide",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
