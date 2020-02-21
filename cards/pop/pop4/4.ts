import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Mew",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},

	abilities: [{
		id: 182,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Barrier",
		},
		text: {
			en: "As long as Mew has any React Energy cards attached to it, prevent all effects, excluding damage, done to Mew by attacks from your opponent's Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyshock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
