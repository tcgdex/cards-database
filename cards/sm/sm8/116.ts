import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-116",
	localId: 116,

	// Card informations
	name: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/116/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/116/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/116/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 1259,
		type: AbilityType.TALENT,
		name: {
			en: "Hard Shell Evolution",
			fr: "Évolution Carapadure",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all damage done to this Pokémon by your opponent's attacks until the end of your opponent's next turn.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez éviter tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire jusqu’à la fin du prochain tour de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
