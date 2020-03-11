import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-2",
	localId: 2,

	// Card informations
	name: {
		en: "Pidgeot",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/2/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 312,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Beating Wings",
		},
		text: {
			en: "Once during your turn (before your attack), If Pidgeot is your Active Pokémon, you may shuffle 1 of your Benched Pokémon and all cards attached to it in your deck. This power can't be used if Pidgeot is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Beak",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
