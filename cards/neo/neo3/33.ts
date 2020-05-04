import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-33",
	localId: 33,

	// Card informations
	name: {
		en: "Magcargo",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/33/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin-ichi Yoshida",

	abilities: [{
		id: 235,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magma Pool",
		},
		text: {
			en: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can't use an Energy card that you used to pay for the Retreat Cost.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Lava Flow",
		},
		text: {
			en: "You may discard any number of Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded in this way.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
