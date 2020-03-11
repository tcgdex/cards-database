import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-SH7",
	localId: "SH7",

	// Card informations
	name: {
		en: "Milotic",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/SH7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/SH7/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 1076,
		type: AbilityType.POKEBODY,
		name: {
			en: "Aqua Mirage",
		},
		text: {
			en: "If you have no cards in your hand, prevent all damage done to Milotic by attacks from your opponent's Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dwindling Wave",
		},
		text: {
			en: "Does 80 damage minus 10 damage for each damage counter on Milotic.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
