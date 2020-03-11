import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-20",
	localId: 20,

	// Card informations
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/20/high",
		},
	},

	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "TOKIYA",

	abilities: [{
		id: 557,
		type: AbilityType.TALENT,
		name: {
			en: "Slush Rush",
			fr: "Chasse-Neige",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Turn",
			fr: "Tour Fracassant",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
