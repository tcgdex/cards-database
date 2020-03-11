import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-31",
	localId: 31,

	// Card informations
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/31/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/31/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/31/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Entomb",
			fr: "Cercueil de Glace",
		},
		text: {
			en: "The Defending Pokémon is now Paralyzed. This Pokémon can't use Ice Entomb during your next turn.",
			fr: "Le Pokémon Défenseur est maintenant Paralysé. Ce Pokémon ne peut pas utiliser Cercueil de Glace pendant votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
