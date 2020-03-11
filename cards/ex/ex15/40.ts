import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-40",
	localId: 40,

	// Card informations
	name: {
		en: "Swellow δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/40/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 114,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extra Wing",
		},
		text: {
			en: "The Retreat Cost for each of your Stage 2 Pokémon-ex is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Agility",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
