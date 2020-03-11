import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-49",
	localId: 49,

	// Card informations
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/49/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/49/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/49/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Enhanced Horn",
			fr: "Corne Améliorée",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has a Pokémon Tool card attached to it, flip 6 coins instead.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si une carte Outil Pokémon est attachée à ce Pokémon, lancez 6 pièces à la place.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
