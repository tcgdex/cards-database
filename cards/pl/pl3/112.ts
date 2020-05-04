import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-112",
	localId: 112,

	// Card informations
	name: {
		en: "Mankey",
		fr: "Férosinge",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/112/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/112/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Extra Punch",
			fr: "Extra punch",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon LV.X, this attack does 10 damage plus 50 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon NIV.X, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
