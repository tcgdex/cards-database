import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-93",
	localId: 93,

	// Card informations
	name: {
		en: "Groudon ex",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Takabon",

	abilities: [{
		id: 777,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hard Rock",
		},
		text: {
			en: "As long as Groudon ex has 1 Energy or less attached to it, damage done to any of your Groudon ex in play by attacks is reduced by 20 (after applying Weakness and Resistance). You can't use more than 1 Hard Rock Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Power Blast",
		},
		text: {
			en: "Discard 2 Energy attached to Groudon ex.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
