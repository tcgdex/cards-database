import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-25",
	localId: 25,

	// Card informations
	name: {
		en: "Misdreavus",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 1237,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dark Spell",
		},
		text: {
			en: "Once during your turn (before your attack), if Misdreavus is your Active Pokémon, you may flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Misdreavus is affected by a Special Condition or if your other Active Pokémon is not Misdreavus.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hide in Shadows",
		},
		text: {
			en: "Switch Misdreavus with 1 of your Benched Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
