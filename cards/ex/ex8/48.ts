import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-48",
	localId: 48,

	// Card informations
	name: {
		en: "Starmie",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/48/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",

	abilities: [{
		id: 24,
		type: AbilityType.POKEBODY,
		name: {
			en: "Core Guard",
		},
		text: {
			en: "As long as Starmie has any Psychic Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Energy Flip",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may move an Energy attached to that Pokémon to another of your opponent's Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Boom",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
