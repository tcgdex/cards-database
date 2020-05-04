import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Mothim",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 414,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/6/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Cloak Party",
		},
		text: {
			en: "Search your deck for up to 3 in any combination of Burmy and Wormadam, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
		},
		text: {
			en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
