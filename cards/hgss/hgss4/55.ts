import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/55/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/55/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



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
