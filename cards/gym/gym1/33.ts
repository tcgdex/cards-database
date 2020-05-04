import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Rocket's Snorlax",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/33/high",
		},
	},

	evolveFrom: {
		en: "Munchlax",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin-ichi Yoshida",

	abilities: [{
		id: 1007,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Restless Sleep",
		},
		text: {
			en: "If your opponent's attack does damage to Rocket's Snorlax and Rocket's Snorlax is already Asleep (even if it's Knocked Out), this power does 20 damage to the attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Collapse",
		},
		text: {
			en: "Rocket's Snorlax is now Asleep (after doing damage).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
