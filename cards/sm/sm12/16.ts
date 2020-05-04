import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-16",
	localId: 16,

	// Card informations
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 586,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/16/high",
		},
	},

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 812,
		type: AbilityType.TALENT,
		name: {
			en: "Seasonal Blessings",
			fr: "Vœux de Saison",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bounce",
			fr: "Rebond",
		},
		text: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
