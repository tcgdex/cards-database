import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-100",
	localId: 100,

	// Card informations
	name: {
		en: "Palkia-EX",
		fr: "Palkia ex",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/100/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/100/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strafe",
			fr: "Rase-Motte",
		},
		text: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dimension Heal",
			fr: "Soin Dimensionnel",
		},
		text: {
			en: "Heal from this Pokémon 20 damage for each Plasma Energy attached to this Pokémon.",
			fr: "Soignez à ce Pokémon 20 dégâts pour chaque Énergie Plasma attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
