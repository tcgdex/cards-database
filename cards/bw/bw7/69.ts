import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-69",
	localId: 69,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 518,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/69/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/69/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/69/high",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Telekinesis",
			fr: "Lévikinésie",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dream Waltz",
			fr: "Valse Rêveuse",
		},
		text: {
			en: "This attack can be used even if this Pokémon is Asleep. If this Pokémon is Asleep, this attack does 30 more damage.",
			fr: "Cette attaque peut être utilisée même si ce Pokémon est Endormi. Si ce Pokémon est Endormi, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
