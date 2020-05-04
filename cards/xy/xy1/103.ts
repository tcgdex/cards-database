import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Swellow",
		fr: "Hélédelle",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/103/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/103/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/103/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 604,
		type: AbilityType.TALENT,
		name: {
			en: "Drive Off",
			fr: "Déroute",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
