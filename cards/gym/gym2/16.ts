import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Sabrina's Alakazam",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/16/high",
		},
	},

	evolveFrom: {
		en: "Kadabra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 655,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psylink",
		},
		text: {
			en: "Sabrina's Alakazam always has a copy of every attack your Psychic Pokémon in play have (including their Energy costs and anything else required in order to use those attacks, such as discarding Energy cards). This power can't be used if Sabrina's Alakazam is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Burn",
		},
		text: {
			en: "You can't use this attack during your next turn.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
