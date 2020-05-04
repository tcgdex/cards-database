import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Karrablast",
		fr: "Carabing",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 588,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",

	abilities: [{
		id: 686,
		type: AbilityType.TALENT,
		name: {
			en: "Shell On",
			fr: "Carapace Armée",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Shelmet from your hand. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Escargaume de votre main. Dans ce cas, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
