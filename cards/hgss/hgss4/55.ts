import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-55",
	localId: 55,

	// Card informations
	name: {
		en: "Aipom",
		fr: "Capumain",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/55/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/55/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/55/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Imitate",
			fr: "Imiter",
		},
		text: {
			en: "Draw cards until you have the same number of cards in your hand as your opponent.",
			fr: "Piochez jusqu'à ce que vous obteniez le même nombre de cartes dans votre main que votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Punch",
			fr: "Kogn'Keu",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

