import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Alakazam",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/2/high",
		},
	},

	evolveFrom: {
		en: "Kadabra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kimiya Masago",

	abilities: [{
		id: 825,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Jump",
		},
		text: {
			en: "Once during your turn (before you attack) you may move an energy card from 1 of your Pokémon to another of your Pokémon. This power can't be used if Alakazam is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "This attack does 30 damage plus 10 more damage for each energy card attached to the Defending Pokémon.",
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
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
