import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-82",
	localId: 82,

	// Card informations
	name: {
		en: "Blissey",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/82/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 706,
		type: AbilityType.TALENT,
		name: {
			en: "Softboiled",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, heal 30 damage from your Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-Edge",
		},
		text: {
			en: "This Pokémon does 60 damage to itself.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
