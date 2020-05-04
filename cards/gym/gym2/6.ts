import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-6",
	localId: 6,

	// Card informations
	name: {
		en: "Giovanni's Machamp",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/6/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 977,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fortitude",
		},
		text: {
			en: "If Giovanni's Machamp would be Knocked Out by an opponent's attack, flip a coin. If heads, Giovanni's Machamp is not Knocked Out and its remaining HP become 10 instead. This power can't be used if Giovanni's Machamp is already Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Punch",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
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
