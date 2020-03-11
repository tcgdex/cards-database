import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-99",
	localId: 99,

	// Card informations
	name: {
		en: "Typhlosion ex",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/99/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Hikaru Koike",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ring of Fire",
		},
		text: {
			en: "The Defending Pokémon is now Burned, and can't retreat until the end of your opponent's next turn.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Split Blast",
		},
		text: {
			en: "Discard 1 Energy card attached to Typhlosion ex. If your opponent has more than 1 Defending Pokémon, you may do 50 damage to each of them instead.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
