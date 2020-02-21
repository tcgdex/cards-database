import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-8",
	localId: 8,

	// Card informations
	name: {
		en: "Plusle",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 53,
		type: AbilityType.POKEBODY,
		name: {
			en: "Chain of Events",
		},
		text: {
			en: "As long as Plusle is your Active Pokémon, whenever your other Active Pokémon, if any, attacks, you may use Cheer On after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active Pokémon has the Chain of Events Poké-Body.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cheer On",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon (including Plusle).",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Extra Circuit",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If you choose Pokémon-ex, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
