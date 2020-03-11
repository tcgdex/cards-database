import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV24",
	localId: "SV24",

	// Card informations
	name: {
		en: "Buzzwole",
		fr: "Mouscoto",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 794,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV24/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV24/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sledgehammer",
			fr: "Coup de Masse",
		},
		text: {
			en: "If your opponent has exactly 4 Prize cards remaining, this attack does 90 more damage.",
			fr: "S’il reste exactement 4 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Swing Around",
			fr: "Balançoire",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
