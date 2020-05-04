import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-48",
	localId: 48,

	// Card informations
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/48/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/48/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/48/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Eri Yamaki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Drift Ashore",
			fr: "À la Dérive",
		},
		text: {
			en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Unarmed",
			fr: "Désarmé",
		},
		text: {
			en: "If you have no cards in your hand, ignore all Energy in this attack's cost.",
			fr: "Si vous n’avez aucune carte dans votre main, ignorez toute l’Énergie dans le coût de cette attaque.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
