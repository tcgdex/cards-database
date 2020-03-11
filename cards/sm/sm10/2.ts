import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-2",
	localId: 2,

	// Card informations
	name: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 10,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",

	abilities: [{
		id: 371,
		type: AbilityType.TALENT,
		name: {
			en: "Pupate",
			fr: "Sortir de sa Chrysalide",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez dans votre deck une carte qui évolue de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
