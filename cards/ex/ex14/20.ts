import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-20",
	localId: 20,

	// Card informations
	name: {
		en: "Grumpig",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/20/high",
		},
	},

	evolveFrom: {
		en: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 70,
		type: AbilityType.POKEBODY,
		name: {
			en: "Thick Fat",
		},
		text: {
			en: "Any damage done to Grumpig by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Circular Steps",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Grumpig.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
