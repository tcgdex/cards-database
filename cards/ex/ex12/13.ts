import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-13",
	localId: 13,

	// Card informations
	name: {
		en: "Victreebel",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 71,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/13/high",
		},
	},

	evolveFrom: {
		en: "Weepinbell",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 218,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Nectar Pod",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Stage 2 Evolved Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This power can't be used if Victreebel is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Poison",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Leaf",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
