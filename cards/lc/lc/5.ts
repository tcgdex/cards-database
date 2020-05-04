import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-5",
	localId: 5,

	// Card informations
	name: {
		en: "Dark Dragonite",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/5/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 822,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Summon Minions",
		},
		text: {
			en: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Tail",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
