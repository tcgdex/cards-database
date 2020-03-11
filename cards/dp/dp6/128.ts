import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-128",
	localId: 128,

	// Card informations
	name: {
		en: "Yanma",
		fr: "Yanma",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 193,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/128/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/128/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/128/high",
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
			en: "U-turn",
			fr: "Demi-Tour",
		},
		text: {
			en: "Switch Yanma with 1 of your Benched Pokémon.",
			fr: "Échangez Yanma avec 1 des Pokémon de votre Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Yanma during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Yanma lors du prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
