import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-89",
	localId: 89,

	// Card informations
	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 622,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "You may draw cards until you have 5 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
