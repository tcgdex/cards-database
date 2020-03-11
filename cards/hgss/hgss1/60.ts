import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/60/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/60/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Minimize",
			fr: "Lilliput",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Clefairy by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Mélofée par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slap",
			fr: "Gifle",
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
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
