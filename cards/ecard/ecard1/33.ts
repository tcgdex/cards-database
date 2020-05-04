import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-33",
	localId: 33,

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
			en: "https://assets.tcgdex.net/en/ecard/ecard1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/33/high",
		},
	},

	evolveFrom: {
		en: "Kadabra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 272,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psymimic",
		},
		text: {
			en: "Once during your turn, instead of Alakazam's normal attack, you may choose 1 of your opponent's Pokémon's attack. Alakazam copies that attack including its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type that Pokémon is, Alakazam's type is still Psychic.) This power can't be used if Alakazam is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Syncroblast",
		},
		text: {
			en: "If Alakazam and the Defending Pokémon don't have the same number of Energy cards on them, this attack's base damage is 20 instead of 80.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
