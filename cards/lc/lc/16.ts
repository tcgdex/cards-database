import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-16",
	localId: 16,

	// Card informations
	name: {
		en: "Muk",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/16/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 257,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Toxic Gas",
		},
		text: {
			en: "Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Sludge",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
