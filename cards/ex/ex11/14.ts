import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



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
