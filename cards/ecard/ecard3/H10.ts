import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H10",
	localId: "H10",

	// Card informations
	name: {
		en: "Gyarados",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 130,


	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kimiya Masago",

	abilities: [{
		id: 1018,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Flame Vapor",
		},
		text: {
			en: "When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon's Vengeance",
		},
		text: {
			en: "If Gyarados has 7 or more damage counters on it, this attack's base damage is 100.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
