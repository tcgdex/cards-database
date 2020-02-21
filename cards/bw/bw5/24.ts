import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-24",
	localId: 24,

	// Card informations
	name: {
		en: "Slowbro",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/24/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 782,
		type: AbilityType.TALENT,
		name: {
			en: "Airhead",
		},
		text: {
			en: "If you have 2, 4, or 6 Prize cards left, this Pokémon can't attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Lazy Headbutt",
		},
		text: {
			en: "This Pokémon is now Asleep.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
