import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-96",
	localId: 96,

	// Card informations
	name: {
		en: "Milotic ex",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/96/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 101,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mystic Scale",
		},
		text: {
			en: "As long as Milotic ex is in play, each player can't play any Technical Machine cards from his or her hand. Discard all Technical Machine cards in play (both yours and your opponent's).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Gentle Wrap",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
		},
		text: {
			en: "Move 1 basic Energy card attached to Milotic ex to 1 of your Benched Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
