import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-24",
	localId: 24,

	// Card informations
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Extract",
			fr: "Extraction d'Énergie",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plasmagic",
			fr: "Plasmagie",
		},
		text: {
			en: "Move 2 damage counters from each of your Pokémon to your opponent's Active Pokémon.",
			fr: "Déplacez 2 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
