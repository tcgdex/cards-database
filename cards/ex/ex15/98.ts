import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-98",
	localId: 98,

	// Card informations
	name: {
		en: "Salamence ex δ",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/98/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 94,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Type Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Salamence ex's type is Fire until the end of your turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Swipe",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dual Stream",
		},
		text: {
			en: "You may do 40 damage instead of 80 to the Defending Pokémon. If you do, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 80
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



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
