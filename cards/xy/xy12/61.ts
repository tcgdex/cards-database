import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-61",
	localId: 61,

	// Card informations
	name: {
		en: "Onix",
		fr: "Onix",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d’une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
