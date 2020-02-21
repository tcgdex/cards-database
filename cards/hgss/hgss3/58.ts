import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Murkrow",
		fr: "Cornebre",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 198,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/58/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/58/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Lancez une pièce. Si c'est face, choisissez au hasard une carte dans la main de votre adversaire. Regardez la carte que vous avez choisie, puis demandez à votre adversaire de la mélanger avec son deck.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
