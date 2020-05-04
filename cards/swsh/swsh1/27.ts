import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-27",
	localId: 27,

	dexId: 757,

	// Card informations
	name: {
		en: "Salandit",
		fr: "Tritox",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/27/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/27/low",
		}
	},

	evolveTo: [{
		en: "Salazzle",
		fr: "Malamandre",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "SATOSHI NAKAI",

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Smog",
			fr: "Purédpois",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
