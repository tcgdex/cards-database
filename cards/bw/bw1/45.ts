import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Joltik",
		fr: "Statitik",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 595,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/45/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/45/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leech Life",
			fr: "Vampirisme",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
