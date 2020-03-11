import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-100",
	localId: 100,

	// Card informations
	name: {
		en: "Hariyama ex",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/100/high",
		},
	},

	evolveFrom: {
		en: "Makuhita",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 0,
		type: AbilityType.POKEBODY,
		name: {
			en: "Commanding Aura",
		},
		text: {
			en: "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Knock Off",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and discard it.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pivot Throw",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
