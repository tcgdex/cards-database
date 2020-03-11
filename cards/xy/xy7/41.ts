import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-41",
	localId: 41,

	// Card informations
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 623,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/41/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/41/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/41/high",
		},
	},

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dig Out",
			fr: "Excavation",
		},
		text: {
			en: "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
			fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Lariat",
			fr: "Double Lasso",
		},
		text: {
			en: "Flip 2 coins. This attack does 90 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
