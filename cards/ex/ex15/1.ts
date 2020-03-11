import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-1",
	localId: 1,

	// Card informations
	name: {
		en: "Ampharos δ",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/1/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 60,
		type: AbilityType.POKEBODY,
		name: {
			en: "Holon Veil",
		},
		text: {
			en: "Treat each Basic Pokémon and Evolution card in your deck, in your discard pile, in your hand, and in play as a Pokémon that has δ on its card.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Delta Circle",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
