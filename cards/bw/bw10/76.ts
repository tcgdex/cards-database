import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-76",
	localId: 76,

	// Card informations
	name: {
		en: "Ursaring",
		fr: "Ursaring",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 217,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/76/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/76/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/76/high",
		},
	},

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Adrenalash",
			fr: "Adrénarush",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
