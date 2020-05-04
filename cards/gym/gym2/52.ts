import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Lt. Surge's Electrode",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/52/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 678,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shock Blast",
		},
		text: {
			en: "If Lt. Surge's Electrode is your Active Pokémon and gets damaged (even if it's Knocked Out), flip a coin. If tails, this power does 20 damage to each Active Pokémon. This power works even if Lt. Surge's Electrode is already Asleep, Confused, or Paralyzed when it takes damage.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Power Ball",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage plus 10 more damage for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
