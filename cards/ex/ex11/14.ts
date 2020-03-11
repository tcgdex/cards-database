import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-14",
	localId: 14,

	// Card informations
	name: {
		en: "Salamence δ",
	},

	hp: 110,

	type: [
		Type.FIRE,
		Type.METAL,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/14/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Dance",
		},
		text: {
			en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Delta Blast",
		},
		text: {
			en: "Discard a Metal Energy card attached to Salamence.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
