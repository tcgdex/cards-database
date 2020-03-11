import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-23",
	localId: 23,

	// Card informations
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 657,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/23/high",
		},
	},

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 1181,
		type: AbilityType.TALENT,
		name: {
			en: "Gale Shuriken",
			fr: "Bourrasque Shuriken",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
