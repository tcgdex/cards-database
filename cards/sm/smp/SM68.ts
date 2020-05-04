import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM68",
	localId: "SM68",

	// Card informations
	name: {
		en: "Xurkitree-GX",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 796,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1163,
		type: AbilityType.TALENT,
		name: {
			en: "Flashing Head",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Rumbling Wires",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
		},
		damage: 100
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Lighting-GX",
		},
		text: {
			en: "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
