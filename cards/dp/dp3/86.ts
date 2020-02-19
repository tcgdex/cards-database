import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Skélénox",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/86/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/86/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 47,
		name: "Hiroki Fuchino"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Astonish",
			fr: "Tissu Fauche",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Skélénox peut évoluer lors du tour où il est joué.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			fr: "Étonnement",
		},
		text: {
			fr: "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire. Regardez la carte et demandez à votre adversaire de la mélanger à son deck.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

