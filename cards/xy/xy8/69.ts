import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-69",
	localId: 69,

	// Card informations
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/69/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Beckon",
			fr: "Invite",
		},
		text: {
			en: "Put a Supporter card from your discard pile into your hand.",
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Turn",
			fr: "Vif Retournement",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
