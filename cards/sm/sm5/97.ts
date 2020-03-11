import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-97",
	localId: 97,

	// Card informations
	name: {
		en: "Gible",
		fr: "Griknot",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 873,
		type: AbilityType.TALENT,
		name: {
			en: "Rock Hiding",
			fr: "Cachette Roche",
		},
		text: {
			en: "If this Pokémon has any Fighting Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie Fighting est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
