import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Gengar",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 184,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Level-Down",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose 1 of your opponent's Pokémon LV.X. Remove the Level-Up card from that Pokémon and have your opponent shuffle that card into his or her deck. This power can't be used if Gengar is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Compound Pain",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon that already has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
