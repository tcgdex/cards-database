import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-37",
	localId: 37,

	// Card informations
	name: {
		en: "Wingull",
		fr: "Goélise",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 278,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roost",
			fr: "Atterrissage",
		},
		text: {
			en: "Heal 30 damage from this Pokémon. It can't retreat during your next turn.",
			fr: "Soignez 30 dégâts à ce Pokémon. Il ne peut pas battre en retraite pendant votre prochain tour.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
