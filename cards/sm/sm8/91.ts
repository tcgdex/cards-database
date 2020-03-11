import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-91",
	localId: 91,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hasuno",

	abilities: [{
		id: 1255,
		type: AbilityType.TALENT,
		name: {
			en: "HAND",
			fr: "MAIN",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if you have 35 or more cards in your hand, you may use this Ability. If you do, you win this game.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si vous avez 35 cartes ou plus dans votre main, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance Cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
