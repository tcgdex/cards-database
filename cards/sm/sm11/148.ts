import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-148",
	localId: 148,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sekio",

	abilities: [{
		id: 215,
		type: AbilityType.TALENT,
		name: {
			en: "Aqua Lift",
			fr: "Aqua-Élévation",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jump On",
			fr: "Saut",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
