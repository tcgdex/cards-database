import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-80",
	localId: 80,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 649,
		type: AbilityType.TALENT,
		name: {
			en: "Stir and Snooze",
			fr: "Sommeil Lourd",
		},
		text: {
			en: "If this Pokémon is Asleep, flip 2 coins instead of 1 between turns. If either of them is tails, this Pokémon is still Asleep.",
			fr: "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleepy Press",
			fr: "Pression Torpide",
		},
		text: {
			en: "Heal 20 damage from this Pokémon. This Pokémon is now Asleep.",
			fr: "Soignez 20 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
