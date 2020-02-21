import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-5",
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
			en: "https://assets.tcgdex.net/en/base/base6/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/5/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

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



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
