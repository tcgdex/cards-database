import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP19",
	localId: "DP19",

	// Card informations
	name: {
		en: "Darkrai",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 543,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Shadow",
		},
		text: {
			en: "Each basic Darkness Energy card attached to your Darkness Pokémon now has the effect \"If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).\" You can't use more than 1 Dark Shadow Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Endless Darkness",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep. If both of them are tails, the Defending Pokémon is Knocked Out.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
