import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-11",
	localId: 11,

	// Card informations
	name: {
		en: "Jumpluff",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/11/high",
		},
	},

	evolveFrom: {
		en: "Skiploom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 298,
		type: AbilityType.POKEBODY,
		name: {
			en: "Buffer",
		},
		text: {
			en: "If Jumpluff would be Knocked Out by an opponent's attack, flip a coin. If heads, Jumpluff is not Knocked Out and its remaining HP becomes 10 instead.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Crush",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
