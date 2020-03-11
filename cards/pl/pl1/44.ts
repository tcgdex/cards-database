import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-44",
	localId: 44,

	// Card informations
	name: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 268,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/44/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/44/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/44/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		name: {
			en: "Ascension",
			fr: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte qui évolue de Blindalys et placez-la sur Blindalys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Thread",
			fr: "Fil empoisonné",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
