import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Machamp",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/8/high",
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
		id: 13,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Strikes Back",
		},
		text: {
			en: "Whenever your opponent's attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.",
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
			en: "Seismic Toss",
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
		name: "Base",
		code: "base1"
	}
}

export default card
