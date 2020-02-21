import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-16",
	localId: 16,

	// Card informations
	name: {
		en: "Espeon Star",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 457,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Purple Ray",
		},
		text: {
			en: "Once during your turn, when you put Espeon * from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Confused.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Boom",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
