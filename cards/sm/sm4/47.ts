import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-47",
	localId: 47,

	// Card informations
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 758,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/47/high",
		},
	},

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Severe Poison",
			fr: "Poison Violent",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
