import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/29/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/29/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Takashi Yamaguchi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
