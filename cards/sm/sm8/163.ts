import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-163",
	localId: 163,

	// Card informations
	name: {
		en: "Pikipek",
		fr: "Picassaut",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 731,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/163/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/163/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/163/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck Off",
			fr: "Picpic Piqueur",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards from your opponent's Active Pokémon.",
			fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
