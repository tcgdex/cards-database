import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-113",
	localId: 113,

	// Card informations
	name: {
		en: "Watchog",
		fr: "Miradar",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 505,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/113/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/113/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/113/high",
		},
	},

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Bite",
			fr: "Double Morsure",
		},
		text: {
			en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
