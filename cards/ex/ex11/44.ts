import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-44",
	localId: 44,

	// Card informations
	name: {
		en: "Hariyama",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/44/high.png",
		},
	},

	evolveFrom: {
		en: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 858,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reversal Aura",
		},
		text: {
			en: "As long as you have more Prize cards left than your opponent, each of Hariyama's attacks does 20 more damage to the Active Pokémon (before applying Weakness and Resistance) and damage done by the Active Pokémon to Hariyama is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		name: {
			en: "Slap Push",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Brick Smash",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card

