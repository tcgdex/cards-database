import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-22",
	localId: 22,

	// Card informations
	name: {
		en: "Volcarona",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/22/high",
		},
	},

	evolveFrom: {
		en: "Larvesta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 781,
		type: AbilityType.TALENT,
		name: {
			en: "Scorching Scales",
		},
		text: {
			en: "Put 4 damage counters instead of 2 on your opponent's Burned Pokémon between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burning Wind",
		},
		text: {
			en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
