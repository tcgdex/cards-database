import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-56",
	localId: 56,

	// Card informations
	name: {
		en: "Kabuto",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 682,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Revive Friends",
		},
		text: {
			en: "Once during your turn (before you attack), you may flip a coin. If heads, search your deck for a card named Kabuto and put it on your Bench. Shuffle your deck afterward. Treat the new Kabuto as a Basic Pokémon. This power can't be used if Kabuto is Asleep, Confused, or Paralyzed (or if your Bench is full).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Work Together",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, and Kabutops on your Bench.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
