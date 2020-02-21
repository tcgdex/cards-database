import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-3",
	localId: 3,

	// Card informations
	name: {
		en: "Venusaur",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/3/high",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 9,
		type: AbilityType.TALENT,
		name: {
			en: "Floral Scent",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Powder",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
