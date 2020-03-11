import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-4",
	localId: 4,

	// Card informations
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 460,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/4/high",
		},
	},

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1223,
		type: AbilityType.TALENT,
		name: {
			en: "Blessings of the Frost",
			fr: "Bénédiction du Gel",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Grass Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie Grass de votre pile de défausse à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypno Hammer",
			fr: "Marteau Hypnotique",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
