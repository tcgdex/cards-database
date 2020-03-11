import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-29",
	localId: 29,

	// Card informations
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 584,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/29/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/29/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/29/high",
		},
	},

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Double Freeze",
			fr: "Double Gelure",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads. If either of them is heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
