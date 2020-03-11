import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-26",
	localId: 26,

	// Card informations
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 460,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/26/high",
		},
	},

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bang Heads",
			fr: "Choc Frontal",
		},
		text: {
			en: "Both this Pokémon and the Defending Pokémon are now Confused.",
			fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
