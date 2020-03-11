import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-79",
	localId: 79,

	// Card informations
	name: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 27,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/79/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/79/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Defense Curl",
			fr: "Boul’armure",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Sandshrew by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à Sabelette par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
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
