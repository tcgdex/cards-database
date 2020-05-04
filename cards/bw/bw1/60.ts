import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 533,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/60/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/60/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/60/high",
		},
	},

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bulk Up",
			fr: "Gonflette",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance).",
			fr: "Lors de votre prochain tour, chaque attaque de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
