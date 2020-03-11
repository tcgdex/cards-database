import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-39",
	localId: 39,

	// Card informations
	name: {
		en: "Samurott",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 503,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/39/high",
		},
	},

	evolveFrom: {
		en: "Dewott",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: 142,
		type: AbilityType.TALENT,
		name: {
			en: "Shell Armor",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
		},
		text: {
			en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
