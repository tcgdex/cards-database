import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoke",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/13/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/13/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Double Return",
			fr: "Double retour",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Wobbuffet.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts sur Qulbutoke.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
